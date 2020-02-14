//Function Fetch data
fetchWeather = (city) => {
    let currentCity = city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=imperial&appid=40056036c1703d275c5175eb77a05d0d`;
    
    fetch(url).then((response) => {
        if(response.status !== 200) {
            if(response.status == 404) {
                alert("Hey the city ir wrong, Please try again");
                return;
            }
            console.log(`Error ${response.status}`);
            return;
        }

        response.json().then((data) => {
            console.log(data);
        })
    })
}

//Function to fetch current hours

getCurrentHours = () => {
    let lon = null;
    let lat = null;
    let url = `http://worldtimeapi.org/api/timezone/America/Argentina/Salta`;

    fetch(url).then((response) => { 
        console.log("response time" + response);
    });
}

//Function calcule height
calcHeight = () => {
    let screenHeight = $(window).height();
    let element = $(".stage");
    let elementHeight = screenHeight - 100;
    element.css("height", elementHeight);
}

//Function change Background collor
changeBackground = () => {
    $("body").removeClass("nightStorm")
    let currentWeather = "Clouds";

    if(currentWeather == "Clouds") { /*TODO - change to switch case*/
       $("body").addClass("nightStorm");
    }
}

$(document).ready(() => {
    calcHeight();
    fetchWeather("Vancouver");
    $(".searchBtn").on('click', () => {
        let searchCity = $(".searchBtn").val();
        fetchWeather(searchCity);
    })
});



//http://worldtimeapi.org/