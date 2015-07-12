var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, arguments);
  this.$node = $('<span class = "dancer"><img src = "http://media.giphy.com/media/SwenV3OsGZmec/giphy.gif"></span>');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
var blinkyDancer = new BlinkyDancer;

BlinkyDancer.prototype.step = function(top, left){
  Dancer.prototype.step.call(this);
  this.$node.toggle;
};

var makeBlinkyDancer = function(){
  var blinkyDancer = makeDancer(top, left. timeBetweenSteps);
  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function(){
    oldStep();
    blinkyDancer.$node.toggle();
  }
return blinkyDancer;
};

