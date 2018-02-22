describe('Thermostat', function() {
  var thermo;

  beforeEach(function() {
    thermo = new Thermostat();
  });

  it('it has a default temp of 20 degrees', function() {
    expect(thermo.defaultTemp).toEqual(20);
  });

  it('it has a minimum temp of 10 degrees', function(){
    expect(function(){thermo.downTemp(15)}).toThrowError('temperature can not be below 10 degrees!')
  });

  describe('#upTemp', function() {
    it('increases temperature', function() {
      thermo.powerSave = false;
      thermo.upTemp(10);
      expect(thermo.currentTemp).toEqual(30);
    });
  });

  describe('#downTemp', function() {
    it('decreases temperature', function(){
      thermo.downTemp(10);
      expect(thermo.currentTemp).toEqual(10);
    });
  });

  describe('#powerSave', function() {
    it('limits temp to 25 if power save mode is on', function() {
      thermo.currentTemp = 25;
      expect(function(){thermo.upTemp(1)}).toThrow('Power Save mode on, max temp is 25');
    });

    it('limits temp to 32 if power save mode is off', function() {
      thermo.powerSave = false;
      thermo.currentTemp = 32;
      expect(function(){ thermo.upTemp(1)}).toThrow('Max temp is 32');
    });

    it('power save is on by default', function() {
      expect(thermo.powerSave).toBe(true);
    });
  });

  describe('#reset', function() {
    it('resets temperature to default', function() {
      thermo.upTemp(5);
      thermo.reset();
      expect(thermo.currentTemp).toEqual(thermo.defaultTemp);
    });
  });

  describe('#energyUsage', function() {
    it('user can check the energy usage of the thermo', function() {
      thermo.currentTemp = 16;
      expect(thermo.energyUsage()).toEqual('low-usage');
    });

    it("energyUsage is 'medium-usage' when > 18 and < 25", function() {
      thermo.currentTemp = 24;
      expect(thermo.energyUsage()).toEqual('medium-usage');
    });

    it("energyUsage is 'high-usage' when > 25", function() {
      thermo.currentTemp = 26;
      expect(thermo.energyUsage()).toEqual('high-usage');
    });
  });
});
