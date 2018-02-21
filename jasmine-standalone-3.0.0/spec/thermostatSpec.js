describe('Thermostat', function() {
  var thermo;

  beforeEach(function() {
    thermo = new Thermostat();
  });

  it('it has a default temp of 20 degrees', function() {
    expect(thermo.default_temp).toEqual(20);
  });

  describe('#up', function() {
    it('increases temperature', function() {
      thermo.up_temp(10);
      expect(thermo.current_temp).toEqual(30);
    });
  });
});
