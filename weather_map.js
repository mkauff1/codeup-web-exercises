let cityLat = document.getElementById("searchLat").value;
let cityLon = document.getElementById("searchLon").value;
function getWeatherData() {

    let weatherStatsUrl = ("https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&units=imperial&appid=" + OWM_KEY);
    let encodedUrl = encodeURI(weatherStatsUrl);

    fetch(encodedUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let mainContainer = document.getElementById("container");

            //for (let weath of data.daily) {
            for (let i = 0; i < 5; i++) {
                let weath = data.daily[i];
                let d = document.createElement("div"); // Single day
                d.classList.add("card", "col-4", "m-1");
                d.style.width = "12rem";
                let dateOfWeather = document.createElement("div");
                dateOfWeather.classList.add("card-header");

                dateOfWeather.innerHTML = "Time: " + weath.dt; //Want to switch date from unit to UTC

                function formatDate(unixDate) {
                    return new Date(unixDate * 1000).toISOString().split('T')[0];
                }

                function appendingAttribute(parent, content) {
                    let div = document.createElement("div");
                    div.innerHTML = content;
                    parent.appendChild(div);
                }

                d.appendChild(dateOfWeather);

                appendingAttribute(d, "Temp: " + weath.temp.min + "/" + weath.temp.max + " F" + "<hr>");
                for (let dayWeather of weath.weather) {
                    //let iconWeath = `http://openweathermap.org/img/w/[icon].png`;
                    appendingAttribute(d, "Description: " + dayWeather.description + " " + dayWeather.icon);
                }

                appendingAttribute(d, "Humidity: " + weath.humidity);
                appendingAttribute(d, "Wind: " + weath.wind_speed + "mph");
                appendingAttribute(d, "Pressure: " + weath.pressure);

                mainContainer.appendChild(d);

            }

        });
}
document.getElementById("searchLatLon").addEventListener('click', getWeatherData)