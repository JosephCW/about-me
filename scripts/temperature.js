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

document.getElementById("submit-button").addEventListener("click", ()=> {
    // Find out which radio button option was selected to convert from.
    let tempCelsius = 0
    let tempFarenheit = 0
    let tempKelvin = 0

    // Select radio buttons
    let radios = document.getElementsByName("fromRadio")
    checked = 0
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            checked = i
        }
    }
    //console.log(checked)
    // 0 is temp celsius
    // 1 is farenheit
    // 2 is kelvin

    if (checked == 0) {
        tempCelsius = parseFloat(document.getElementById("temp-celsius-input").value)
        tempFarenheit = convertFromCelsiusToFarenheit(tempCelsius)
        tempKelvin = convertFromCelsiusToKelvin(tempCelsius)
    } else if (checked == 1) {
        tempFarenheit = parseFloat(document.getElementById("temp-farenheit-input").value)
        tempCelsius = convertFromFarenheitToCelsius(tempFarenheit)
        tempKelvin = convertFromFarenheitToKelvin(tempFarenheit)
    } else {
        tempKelvin = parseFloat(document.getElementById("temp-kelvin-input").value)
        tempCelsius = convertFromKelvinToCelsius(tempKelvin)
        tempFarenheit = convertFromKelvinToFarenheit(tempKelvin)
    }
    // console.log(tempCelsius)
    // console.log(tempFarenheit)
    // console.log(tempKelvin)
    // Update the text fields
    document.getElementById("tempC").innerHTML = tempCelsius.toFixed(2)
    document.getElementById("tempF").innerHTML = tempFarenheit.toFixed(2)
    document.getElementById("tempK").innerHTML = tempKelvin.toFixed(2)
})
