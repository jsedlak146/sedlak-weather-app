//these are the variables i will be needing

var citySearch = document.querySelector('.city-input');
var inputForm = document.querySelector('.inputForm');
var card = document.querySelectorAll('.card');
var apiKey = '6bc39d38aebd579551385cf995faaa5f';

//this is the button to search for your city

inputForm.addEventListener('submit', function(e) {
    e.preventDefault();
    fiveDay(citySearch.value);
    console.log(citySearch.value);
});

function init() {
    setInterval(function() {
    $(`currentDay`).text((dayjs()).format(`dddd MMM, YYYY [-] h:mm:ss a`));
}, 1000);
}

init();


//this is my function, it delivers the five day weather forecast
//by using a loop that goes to each day and fills in my weather cards for Monday-FRiday
function fiveDay(cityName) {
    var units = 'imperial';
    var lang = 'en';
    console.log(cityName)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`).then(function(responseBody) {
        console.log(responseBody)
        return responseBody.json();
    }).then(function(fiveData) {
        console.log(fiveData)
        for (let i = 0; i < 5; i++) {
            console.log(card[i])
            console.log(fiveData.list[(i * 8)])
            console.log(fiveData.list[(i * 8)].main.temp)
            console.log(fiveData.list[(i * 8)].wind.speed)
            console.log(fiveData.list[(i * 8)].main.humidity)
            card[i].children[1].children[0].innerHTML = "date"
            card[i].children[1].children[1].innerHTML = fiveData.list[(i * 8)].main.temp + "- Degrees F"
            card[i].children[1].children[2].innerHTML = fiveData.list[(i * 8)].wind.speed + "- MPH Wind Speed"
            card[i].children[1].children[3].innerHTML = fiveData.list[(i * 8)].main.humidity + "% - Humidity"

        }
     })
};

//local storage function to save your past city searches

function setLocalStorage(elementToAdd, indexToSet) {
    var currentStorage = getLocalStorage();
    currentStorage[indexToSet] = elementToAdd;
    localStorage.setItem("cityName", JSON.stringify(currentStorage));
  }
  
  function getLocalStorage() {
    return JSON.parse(localStorage.getItem('cityName')) || [];
  };

