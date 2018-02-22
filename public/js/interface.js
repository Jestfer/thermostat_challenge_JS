/// Acceso en la consola...
// var thermo = new Thermostat();

$(document).ready(function () {
  /// Todo parte del objeto 'window' en JS
  /// al decir aquí, window.thermo, podemos acceder en la consola y donde queramos
  /// xk todo parte de window en JS, osea q tiene scope global
  window.thermo = new Thermostat();

  /// Objeto entero! Esto nos deja hacer cosas con el obj más abajo
  var currentTemp = $('#current-temperature');
  currentTemp.text(thermo.currentTemp);
  // console.log(thermo.currentTemp);

  // Closure, función como parámetro...
  $('#temperature-up').click(function () {
    /// Mal hecho, no modificamos la propiedad, el método upTemp se encarga de eso
    /// xk la propiedad normalmente sería privada y no podríamos modificarla
    // thermo.currentTemp += 1;
    thermo.upTemp(1);
    printTemp();
  });

  $('#temperature-down').click(function () {
    thermo.downTemp(1);
    printTemp();
  });

  $('#temperature-reset').click(function () {
    thermo.reset();
    printTemp();
  });

  function printTemp() {
    currentTemp.text(thermo.currentTemp);
  };
});