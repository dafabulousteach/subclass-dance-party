describe("shakira", function() {

  var shakira;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shakira = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(shakira.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(shakira.$node, 'toggle');
    shakira.step();
    expect(shakira.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(shakira, "step");
      expect(shakira.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shakira.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shakira.step.callCount).to.be.equal(2);
    });
  });
});
