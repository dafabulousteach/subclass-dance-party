var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};
// DEFINE THE CONSTRUCTOR
Dancer.prototype.constructor = Dancer;

// DEFINE THE METHODS
Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function(){
  console.log('Dancer is stepping!');
  setTimeout(function(){
    this.step();
  }, this._timeBetweenSteps);
}

Dancer.proto
//  Dancer.prototype.makeFunPants = function(){
//   this.funPants = 'pink';
//   console.log('I have fun pants!');
// }

// Dancer.prototype.rotate = function(){
//   console.log('rotate has been called');
// };
