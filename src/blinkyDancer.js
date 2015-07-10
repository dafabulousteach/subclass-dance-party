var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  
  //this allows makeBlinkyDancer to inherit the properties of Dancer
  Dancer.call(this, top, left, timeBetweenSteps);
  // console.log('top ', this.top, 'this.left', this.left);

  this.$node = $('<span class="blinkyDancer"></span>');
  this.setPosition(top, left);
  
  //this allows the dancer to be display on the dance floor, not sure why
  this.oldStep = this.step;
};

//allows blinkyDancer to inherit the methods of dancer
makeBlinkyDancer.prototype = Object.create(Dancer.prototype);

//this defines the dance move of blinky dancer.
makeBlinkyDancer.prototype.step = function() {  
  Dancer.prototype.step.call(this);
  this.$node.toggle();
}; 

makeBlinkyDancer.prototype.setPosition = function(top, left){
  Dancer.prototype.setPosition.call(this, top, left);

};

