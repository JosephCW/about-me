function convertFromCelsiusToKelvin(temperatureInCelsius) {
    return temperatureInCelsius + 273.15
}

function convertFromKelvinToCelsius(temperatureInKelvin) {
    return temperatureInKelvin - 273.15
}

function convertFromFarenheitToKelvin(temperatureInFarenheit) {
    return convertFromCelsiusToKelvin(convertFromFarenheitToCelsius(temperatureInFarenheit))
}

function convertFromCelsiusToFarenheit(temperatureInCelsius) {
    return ((9/5) * temperatureInCelsius) + 32
}

function convertFromKelvinToFarenheit(temperatureInKelvin) {
    return convertFromCelsiusToFarenheit(convertFromKelvinToCelsius(temperatureInKelvin))
}

function convertFromFarenheitToCelsius(temperatureInFarenheit) {
    return (temperatureInFarenheit - 32) * (5/9)
}


