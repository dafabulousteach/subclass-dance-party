var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  
  //this allows makeBlinkyDancer to inherit the properties of Dancer
  Dancer.apply(this, arguments);

  //this allows the dancer to be display on the dance floor, not sure why
  this.oldStep = this.step;
  // this.step = this.step;
  this.$node.addClass('blinkyDancer');

};

//allows blinkyDancer to inherit the methods of dancer
makeBlinkyDancer.prototype = Object.create(Dancer.prototype);

//this defines the dance move of blinky dancer.
makeBlinkyDancer.prototype.step = function() {  
  Dancer.prototype.step.call(this);
  this.$node.toggle();

};