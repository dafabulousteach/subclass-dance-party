var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  
  Dancer.apply(this, arguments);
  // this.$node = $('<span class="dancer"></span>');
  this.oldStep = this.step;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = blinkyDancer.step;


};

// var newDancer = new makeBlinkyDancer();

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);

makeBlinkyDancer.prototype.step = function() {  
  Dancer.prototype.step.call(this);
  this.$node.toggle();

};