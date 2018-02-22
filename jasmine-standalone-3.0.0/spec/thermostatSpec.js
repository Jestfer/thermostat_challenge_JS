describe('Thermostat', function() {
  var thermo;

  beforeEach(function() {
    thermo = new Thermostat();
  });
  
  it('it has a default temp of 20 degrees', function() {
    expect(thermo.default_temp).toEqual(20);
  });

  it('it has a minimum temp of 10 degrees', function(){
    expect(function(){thermo.down_temp(15)}).toThrowError('temperature can not be below 10 degrees!')
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

  describe('#saving mode', function() {
    it('limits temp to 25 if power save mode is on', function() {
      thermo.current_temp = 25;
      thermo.power_save = true;

      expect(function(){thermo.up_temp(1)}).toThrow('Power Save mode on, max temp is 25');
    });
  });
});
