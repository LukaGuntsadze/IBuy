let weather = {
    apiKey: "c9a3542cf03746e8c08e223d4225981d",
    fetchWeather:function(city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            +"&appid=" 
            + this.apiKey
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed} = data.wind;
        document.querySelector(".city").innerText = "ამინდი " + name
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png"
        document.querySelector(".description").innerText = description
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".humidity").innerText = "ტენიანობა: " + humidity + "%";
        document.querySelector(".wind").innerText = "ქარის სისწრაფე: " + speed + "კმ/ს";
        document.body.style.backgroundImage =   "url('https://source.unsplash.com/1600x900/?" + name + "')";
   
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
      },

}

document.querySelector(".search button").addEventListener("click", function(){
    weather.search()
})

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Kutaisi");
