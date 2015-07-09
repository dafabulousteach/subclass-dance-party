// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  
  //this sets the left property of the dancer the to left argument
  this.left = left;
  
  //this sets the top property of the dancer the to top argument
  this.top = top;
  
  //this sets the time property of the dancer the to time argument
  this.timeBetweenSteps = timeBetweenSteps;
  
  //this sets the node on the DOM to have a span tag
  this.$node = $('<span img class="dancer"></img></span>');

  //invokes the setPosition method, which assigns a position to the dancer
  this.setPosition(top, left);
  
  //invokes the step method, which tells the dancer when to move
  this.step();

};

Dancer.prototype.setPosition = function(top, left){

//this sets the position of the dancer
  var styleSettings = {
    top: top,
    left: left
  };

  //this adds styling to the dancer via the styling sheet
  this.$node.css(styleSettings);
  
};


Dancer.prototype.step = function(){

  //this.step represents the function
  //bind, bind the (this) object to the function
  //(this) represents the object being passed in, (in our case this is a type of dancer that calls this function. I think this is true)
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.lineUp = function() {

};
