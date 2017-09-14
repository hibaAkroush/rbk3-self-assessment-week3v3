// Please modify this file!

var Fish = Backbone.Model.extend({

  defaults: {
    name: 'Larry',
    image: 'http://www.google.com',
    description: 'Regular old fish',
    displayInfo: false
  },
  // i will make a function toggleDescription invoked from event
  // this function should set the value of description in default
  // to nothing when invoked
  //i wil set the value of dicription info because i bieleve if its false the discription does not appear

  toggleDescription: function(){
  	this.set("displayInfo",!this.get("displayInfo"))
    this.trigger("toggle:description",this);
  }

});

