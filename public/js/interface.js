/// Acceso en la consola...
// We'd better define this outside as a global variable
var thermo = new Thermostat();

$(document).ready(function () {
  /// Todo parte del objeto 'window' en JS
  /// al decir aquí, window.thermo, podemos acceder en la consola y donde queramos
  /// xk todo parte de window en JS, osea q tiene scope global
  // window.thermo = new Thermostat(); -> WE DO NOT NEED WINDOW AS WE HAVE var thermo outside of the document scope

  /// Objeto entero! Esto nos deja hacer cosas con el obj más abajo
  var currentTemp = $('#current-temperature');
  currentTemp.text(thermo.currentTemp);
  // console.log(thermo.currentTemp);

  // Closure, función como parámetro...
  $('#temperature-up').click(function () { // function (e) -> for the event
    /// Mal hecho, no modificamos la propiedad, el método upTemp se encarga de eso
    /// xk la propiedad normalmente sería privada y no podríamos modificarla
    // thermo.currentTemp += 1;
    // console.log(e);
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

  $('#temperature-set').click(function () {
    var userInput = prompt('Set your temperature');

    if (userInput > thermo.currentTemp) {
      thermo.upTemp(userInput - thermo.currentTemp);
      printTemp();
    } else if (userInput < thermo.currentTemp) {
      thermo.downTemp(thermo.currentTemp - userInput);
      printTemp();
    }
  });

  function printTemp() {
    currentTemp.text(thermo.currentTemp);
    $('#temperature').attr('class', thermo.energyUsage());
  };
});