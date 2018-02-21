describe('Thermostat', function() {
  var thermo;

  beforeEach(function() {
    thermo = new Thermostat();
  });

  it('it has a default temp of 20 degrees', function() {
    expect(thermo.default_temp).toEqual(20);
  });

  describe('#up_temp', function() {
    it('increases temperature', function() {
      thermo.up_temp(10);
      expect(thermo.current_temp).toEqual(30);
    });
  });

  describe('#down_temp', function() {
    it('decreases temperature', function(){
      thermo.down_temp(10);
      expect(thermo.current_temp).toEqual(10);
    });
  });
});
