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

function init() {
    setInterval(function() {
    $(`currentDay`).text((dayjs()).format(`dddd MMM, YYYY [-] h:mm:ss a`));
}, 1000);
}

init();

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
            card[i].children[1].children[0].innerHTML = "CORRECT THE DAY" //dayjs().format(`dddd MMM, YYYY [-] h:mm:ss a`);
            card[i].children[1].children[1].innerHTML = fiveData.list[(i * 8)].main.temp + "degrees F"
            card[i].children[1].children[2].innerHTML = fiveData.list[(i * 8)].wind.speed
            card[i].children[1].children[3].innerHTML = fiveData.list[(i * 8)].main.humidity

        }
     })
};

// console.log(card[0].children[1].children);  use these to navigate and then line 26 to display inside the box
//humidity wind speed temp date

// card[0] Monday
// card[0].children[1].children[0].innerHTML = init()
// card[0].children[1].children[1].innerHTML = .main.temp
// card[0].children[1].children[2].innerHTML = .wind.speed
// card[0].children[1].children[3].innerHTML = .main.humidity

// card[1] Tuesday
// card[1].children[1].children[0].innerHTML = 
// card[1].children[1].children[1].innerHTML = .main.temp
// card[1].children[1].children[2].innerHTML = .wind.speed
// card[1].children[1].children[3].innerHTML = .main.humidity

// card[2] Wednesday
// card[2].children[1].children[0].innerHTML = ()
// card[2].children[1].children[1].innerHTML = ()
// card[2].children[1].children[2].innerHTML = ()
// card[2].children[1].children[3].innerHTML = ()

//card[3] Thursday
// card[3].children[1].children[0].innerHTML = ()
// card[3].children[1].children[1].innerHTML = ()
// card[3].children[1].children[2].innerHTML = ()
// card[3].children[1].children[3].innerHTML = ()

//card[4] Friday
// card[4].children[1].children[0].innerHTML = ()
// card[4].children[1].children[1].innerHTML = ()
// card[4].children[1].children[2].innerHTML = ()
// card[4].children[1].children[3].innerHTML = ()






//This is your 5 day API key, use in fetch stuff
//https://api.openweathermap.org/data/2.5/forecast?q={cityname}&appid={6bc39d38aebd579551385cf995faaa5f}

//This is your current day weather API, use in fetch stuff currentDay
//https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={6bc39d38aebd579551385cf995faaa5f}
