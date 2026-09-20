const but_back = document.getElementById("dark").Value;
function background_mode() {
  document.body.classList.toggle("light_mode");
}
// const latitude = 35.8327;   // Karaj
// const longitude = 50.9916;

// const url =`
//     https://api.open-meteo.com/v1/forecast? +
//     latitude=${latitude} +
//     &longitude=${longitude} +
//     &current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code +
//     &hourly=temperature_2m +
//     &timezone=auto;`

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("API Error:", error);
//     });

function search() {
  let search = document.getElementById("search").value;
  let btns = document.getElementById("search_btn").value;
  let degree = document.getElementById("degree").value;
  let wheather=document.getElementById('wheather').value;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?appid=d77e70bfb701e0bfe2dc6f59f1c67e2f&q=${search}&units=metric`,
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("degree").innerHTML = data["main"]["temp"];
        document.getElementById("wheather").innerHTML = data["weather"][0]['main'];
                document.getElementById("wind").innerHTML = data["wind"]['speed'];
                document.getElementById("humidity").innerHTML= data["main"]["humidity"];
               document.getElementById('city').inner=data['name']
                              document.getElementById('country').inner=data['sys']['country']
    });
    

}
