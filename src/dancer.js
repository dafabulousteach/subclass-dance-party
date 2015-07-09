// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.left = left;
  this.top = top;
  this.timeBetweenSteps = timeBetweenSteps;
  
  this.$node = $('<span class="dancer"></span>');

  this.setPosition(top, left);
  this.step();

};

Dancer.prototype.setPosition = function(top, left){

  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
  
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

