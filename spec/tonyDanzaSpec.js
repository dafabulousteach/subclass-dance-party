describe("tonyDanza", function() {

  var tonyDanza;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    tonyDanza = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(tonyDanza.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(tonyDanza.$node, 'toggle');
    tonyDanza.step();
    expect(tonyDanza.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(tonyDanza, "step");
      expect(tonyDanza.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(tonyDanza.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(tonyDanza.step.callCount).to.be.equal(2);
    });
  });
});
