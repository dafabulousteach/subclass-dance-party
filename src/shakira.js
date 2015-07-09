var makeShakira = function(top, left, timeBetweenSteps){
  
  //this allows makeBlinkyDancer to inherit the properties of Dancer
  Dancer.apply(this, arguments);

  //this allows the dancer to be display on the dance floor, not sure why
  this.oldStep = this.step;
  // this.step = this.step;

	// this.$node.addClass('shakira');
	this.setPosition(top, left);
	this.$node = $('<img class="dancer shakira" src="http://media.giphy.com/media/nNOuejcrgQ3eg/giphy.gif"></img>');

};

//allows blinkyDancer to inherit the methods of dancer
makeShakira.prototype = Object.create(Dancer.prototype);

//this defines the dance move of blinky dancer.
makeShakira.prototype.step = function() {  
  Dancer.prototype.step.call(this);
  this.$node.toggle();

};

makeShakira.prototype.lineUp = function() {

};