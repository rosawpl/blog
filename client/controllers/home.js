
Template.home.greeting = function () {
  return "Tell us your thought";
};

Template.home.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});


