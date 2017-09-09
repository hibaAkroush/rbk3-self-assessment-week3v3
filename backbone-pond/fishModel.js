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

  toggleDescription: function(fish){
  	console.log(!this.get(this.defaults.displayInfo))
  	this.set(this.defaults.displayInfo,!this.get(this.defaults.displayInfo))
  }

});


//var fishTemplate = this.model.get('displayInfo') ? this.fishTemplateDetails : this.fishTemplateBasic;