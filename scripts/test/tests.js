QUnit.test( "Test Temperature Conversions", function(assert) {
    assert.equal(273.15, convertFromCelsiusToKelvin(0));
    assert.equal(-40, convertFromCelsiusToFarenheit(-40));
    assert.equal(-40, convertFromFarenheitToCelsius(-40));
    assert.equal(-273.15, convertFromKelvinToCelsius(0));
    assert.equal(32, convertFromCelsiusToFarenheit(0));
    assert.equal(0, convertFromFarenheitToCelsius(32));
});