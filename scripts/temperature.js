function convertFromCelsiusToKelvin(temperatureInCelsius) {
    if (temperatureInCelsius < -273.15) throw Error("Celsius does not go lower than -273.15!")
    return temperatureInCelsius + 273.15
}

function convertFromKelvinToCelsius(temperatureInKelvin) {
    if (temperatureInKelvin < 0) throw Error("Kelvin is absolute and cannot be negative!")
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

function incrementAndUpdateTimesConverted() {
    timesConverted = parseFloat(timesConverted) + 1
    localStorage.setItem("timesConverted", timesConverted)
    document.getElementById("stimes-converted").innerHTML = timesConverted
}


let timesConverted = localStorage.getItem("timesConverted")
if (timesConverted === null) {
    timesConverted = 0
    localStorage.setItem("timesConverted", timesConverted)
}
document.getElementById("stimes-converted").innerHTML = timesConverted


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
    try {
        if (checked == 0) {
            tempCelsius = parseFloat(document.getElementById("temp-celsius-input").value)
            if (isNaN(tempCelsius)) throw "Please provide a value for Celsius!"
            tempFarenheit = convertFromCelsiusToFarenheit(tempCelsius)
            tempKelvin = convertFromCelsiusToKelvin(tempCelsius)
        } else if (checked == 1) {
            tempFarenheit = parseFloat(document.getElementById("temp-farenheit-input").value)
            if (isNaN(tempFarenheit)) throw "Please provide a value for Farenheit!"
            tempCelsius = convertFromFarenheitToCelsius(tempFarenheit)
            tempKelvin = convertFromFarenheitToKelvin(tempFarenheit)
        } else {
            tempKelvin = parseFloat(document.getElementById("temp-kelvin-input").value)
            if (isNaN(tempKelvin)) throw "Please provide a value for Kelvin!"
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

        incrementAndUpdateTimesConverted()
    } catch(err) {
        alert(err.message)
    }
})
