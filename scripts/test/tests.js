QUnit.test( "Test Temperature Conversions", function(assert) {
    assert.equal(273.15, convertFromCelsiusToKelvin(0));
    assert.equal(-40, convertFromCelsiusToFarenheit(-40));
    assert.equal(-40, convertFromFarenheitToCelsius(-40));
    assert.equal(-273.15, convertFromKelvinToCelsius(0));
    assert.equal(32, convertFromCelsiusToFarenheit(0));
    assert.equal(0, convertFromFarenheitToCelsius(32));
});

QUnit.test('Invalid Temperatures throw errors', function (assert) {
    assert.expect(2);
  
    assert.throws(
      function () { convertFromCelsiusToKelvin(-273.16); },
      function (err) { 
          //console.log(err.message)
          return err.message === 'Celsius does not go lower than -273.15!'
        },
      'Error thrown'
    );

    assert.throws(
        function () {convertFromKelvinToCelsius(-1);}, 
        function(err) {
            return err.message === 'Kelvin is absolute and cannot be negative!'
        },
        'Error thrown'
    );
  })