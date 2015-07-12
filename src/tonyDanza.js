var MakeTonyDanza = function(top, left, timeBetweenSteps){
  
  //this allows makeBlinkyDancer to inherit the properties of Dancer
  Dancer.apply(this, arguments);

  this.step();
  this.setPosition(top, left);
  // this.oldRotate = this.rotate;
  this.rotate();
  this.$node = $('<span class="dancer"><img src="http://media.giphy.com/media/juOf7fA17YkIo/giphy.gif"></span>');

};

MakeTonyDanza.prototype = Object.create(Dancer.prototype);
MakeTonyDanza.prototype.constructor = MakeTonyDanza;

MakeTonyDanza.prototype.step = function() {  
  Dancer.prototype.step.call(this);
  this.$node.toggle();

};

// jQuery.fn.rotate = function(degree){
//   $(this).css({'transform': 'rotate('+degree+'deg)'})
//   return $(this)
// };
