// define template content, called in html file by template tag
if (Meteor.isClient) {

    // This code only runs on the client

    Template.body.helpers({

        tasks: [

            {
                text: "This is task 1"
            },

            {
                text: "This is task 2"
            },

            {
                text: "This is task 3"
            }

        ]

    });

}

// Create new collection
Tasks = new Mongo.Collection("tasks");



if (Meteor.isClient) {

    // This code only runs on the client

    Template.body.helpers({

        tasks: function() {

            // Show newest tasks at the top

            return Tasks.find({}, {
                sort: {
                    createdAt: -1
                }
            });

        }

    });



    Template.body.events({
        // event => add a new task by a form
        "submit .new-task": function(event) {

            // Prevent default browser form submit

            event.preventDefault();



            // Get value from form element

            var text = event.target.text.value;



            // Insert a task into the collection

            Tasks.insert({

                text: text,

                createdAt: new Date() // current time

            });
            console.log(event);


            // Clear form

            event.target.text.value = "";
            // end of the event
        }

    });

    Template.task.events({

        "click .toggle-checked": function() {

            // Set the checked property to the opposite of its current value

            Tasks.update(this._id, {

                $set: {
                    checked: !this.checked
                }

            });

        },
// Delete functionnality for checked elements
        "click .delete": function() {

            Tasks.remove(this._id);

        }

    });

}
