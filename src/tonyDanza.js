var makeTonyDanza = function(top, left, timeBetweenSteps){
  
  //this allows makeBlinkyDancer to inherit the properties of Dancer
  Dancer.apply(this, arguments);

  //this allows the dancer to be display on the dance floor, not sure why
  this.oldStep = this.step;
  this.$node = $('<img class="dancer tonyDanza" src="/Users/student/Desktop/dancer/2015-06-subclass-dance-party/styles/danza.gif"></img>');

};

//allows blinkyDancer to inherit the methods of dancer
makeTonyDanza.prototype = Object.create(Dancer.prototype);

//this defines the dance move of blinky dancer.
makeTonyDanza.prototype.step = function() {  
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  this.$node.toggle();

};

makeTonyDanza.prototype.lineUp = function() {

};