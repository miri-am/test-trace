if (Meteor.isClient) {
  Template.hello.helpers({
    createdAtFormatted: function (time) {
      return moment(time).format('MM/DD/YYYY, HH:MM'); //returns "Invalid Date" in Firefox when trace package is added
    },
  });
}
