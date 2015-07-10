var makeTonyDanza = function(top, left, timeBetweenSteps){
  
  //this allows makeBlinkyDancer to inherit the properties of Dancer
  Dancer.apply(this, arguments);

  //this allows the dancer to be display on the dance floor, not sure why
  this.oldStep = this.step;
  this.step();
  this.setPosition(top, left);
  this.rotate(angle, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src ="/Users/kmerino/Dropbox/Telegraph Academy/2015-06-subclass-dance-party/styles/danza.gif"></span>');

};

//allows blinkyDancer to inherit the methods of dancer
makeTonyDanza.prototype = Object.create(Dancer.prototype);

//this defines the dance move of blinky dancer.
makeTonyDanza.prototype.step = function() {  
  Dancer.prototype.step.call(this);
  this.$node.animate({height: "toggle"}, 5000, function(){});

};

makeTonyDanza.prototype.rotate = function(angle, timeBetweenSteps) {
	Dancer.prototype.rotate.call(this);
	this.$node.rotate({
		angle: 90,
		animateTo: angle})
};



