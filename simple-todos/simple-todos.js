
// define template content, called in html file by template tag
if (Meteor.isClient) {

  // This code only runs on the client

  Template.body.helpers({

    tasks: [

      { text: "This is task 1" },

      { text: "This is task 2" },

      { text: "This is task 3" }

    ]

  });

}

// Create new collection
Tasks = new Mongo.Collection("tasks");



if (Meteor.isClient) {

  // This code only runs on the client

  Template.body.helpers({

    tasks: function () {

      return Tasks.find({});

    }

  });

}
