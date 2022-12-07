var citySearch = document.querySelector('.city-input');
// var weather = document.querySelector('');
var inputForm = document.querySelector('.inputForm');
var card = document.querySelectorAll('.card');
// console.log(card[0].children[1].children);  use these to navigate and then line 26 to display inside the boxes
// card[0].children[1].children[3].innerHTML = "frank Sinatra"
var apiKey = '6bc39d38aebd579551385cf995faaa5f';

inputForm.addEventListener('submit', function(e) {
    e.preventDefault();
    fiveDay(citySearch.value);
    console.log(citySearch.value);
});

function fiveDay(cityName) {
    var units = 'imperial';
    var lang = 'en';
    console.log(cityName)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`).then(function(responseBody) {
        console.log(responseBody)
        return responseBody.json();
    }).then(function(fiveData) {
        console.log(fiveData)
        for (let i = 0; i < 5; i++) {
            console.log(card[i])
            console.log(fiveData.list[(i * 8)])
        }
     })
;}



//This is your 5 day API key, use in fetch stuff
//https://api.openweathermap.org/data/2.5/forecast?q={cityname}&appid={6bc39d38aebd579551385cf995faaa5f}

//This is your current day weather API, use in fetch stuff currentDay
//https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={6bc39d38aebd579551385cf995faaa5f}
