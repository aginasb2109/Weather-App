let inputcity = document.getElementById("input").value;
let button = document.getElementById("bttn");
let details = document.getElementById("result");
let weatherImage = document.getElementById("weatherImage");

button.addEventListener("click", Cityweather);

function Cityweather() {
  let val = document.getElementById("inputs").value;
  const apikey = "3c9aefd417e72663913bcda26315cd93";
  if (!val) {
    alert("please enter a city");
    return;
  }
  const currentweatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apikey}`;
  fetch(currentweatherurl)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod == "404") {
        alert("Please enter a valid city");
        return;
      }
      displayweather(data);
    })
    .catch((error) => {
      console.error("error", error);
    });
    input.value = '';

}

function displayweather(data) {
  let weather = document.getElementById("weather");
  let humid = document.getElementById("humidity");
  let temp = document.getElementById("temp");
  let icon = document.getElementById("icon");

  weather.innerHTML = "";
  humid.innerHTML = "";
  temp.innerHTML = "";

  if (data.cod == "404") {
    weather.innerHTML = `<p> ${data.message}</p>`;
  } else {
    weather.innerHTML = data.weather[0].main;
    let humiddata = data.main.humidity;
    humid.innerHTML = `Humidity:   ${humiddata} %`;
    let temperature = Math.round(data.main.temp - 273);
    temp.innerHTML = `${temperature} &deg C`;
    let iconcode = data.weather[0].icon;
    let iconurl = `https://openweathermap.org/img/wn/${iconcode}@2x.png`;
    console.log(iconurl)
    icon.src = iconurl;
    icon.style.display = "block";
  }
}
