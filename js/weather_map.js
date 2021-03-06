var cityLat = 42.1417394047964;
var cityLon = -83.17823878255246;
getWeatherData();
function getWeatherData() {

    let weatherStatsUrl = ("https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&units=imperial&appid=" + OWM_KEY);
    let encodedUrl = encodeURI(weatherStatsUrl);

    fetch(encodedUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let mainContainer = document.getElementById("container");
            mainContainer.innerHTML = "";
            for (let i = 0; i < 5; i++) {   //for (let weath of data.daily) {
                let weath = data.daily[i];
                let d = document.createElement("div"); // Single day
                d.classList.add("card", "col-4", "m-1");

                // Get Date and make it UTC
                let unixDate = weath.dt;
                function formatDate(unixDate) {
                    return new Date(unixDate * 1000).toISOString().split('T')[0];
                }
                let dateOfWeather = document.createElement("div");
                dateOfWeather.classList.add("card-header");
                dateOfWeather.innerHTML = "Date: " + formatDate(unixDate);

                // Create Div with added attributes below
                function appendingAttribute(parent, content) {
                    let div = document.createElement("div");
                    div.innerHTML = content;
                    parent.appendChild(div);
                }

                // Show Date Attribute
                d.appendChild(dateOfWeather);

                // Add Temp Attribute + Description TODO: Fix Image source
                appendingAttribute(d, "Temp: " + weath.temp.min + "/" + weath.temp.max + " F" + "<hr>");
                for (let dayWeather of weath.weather) {
                    // <img src='${currentFeature.properties.photo}'/>`
                    // const icon1 = `https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png`;
                    appendingAttribute(d, "Description: " + dayWeather.description + " "); // + <img src="icon1"/>);
                }
                // Add other Attributes
                appendingAttribute(d, "Humidity: " + weath.humidity);
                appendingAttribute(d, "Wind: " + weath.wind_speed + "mph");
                appendingAttribute(d, "Pressure: " + weath.pressure);

                mainContainer.appendChild(d);
            }
        });
}
document.getElementById("searchLatLon").addEventListener('click', getWeatherData);