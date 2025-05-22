const currentYear = new Date().getFullYear();


const lastModified = document.lastModified;

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

const temperatureCelsius = 5;
const windSpeedKph = 10;
const condition = "Cloudy";


function calculateWindChill(tempCelsius, windKph) {
    const windChill = 13.12 + 0.6215 * tempCelsius - 11.37 * Math.pow(windKph, 0.16) + 0.3965 * tempCelsius * Math.pow(windKph, 0.16);
    return windChill.toFixed(2);
}

if (temperatureCelsius <= 10 && windSpeedKph > 4.8) {
    const windChillValue = calculateWindChill(temperatureCelsius, windSpeedKph);
    const weatherData = `Temperature: ${temperatureCelsius} °C<br>Condition: ${condition}<br>Wind: ${windSpeedKph} km/h<br>Wind Chill: ${windChillValue} °C`;
    document.getElementById("weather-data").innerHTML = weatherData;
} else {
    document.getElementById("weather-data").textContent = "Sensación térmica: N/A";
}
