//Function to define the default state
defaultState = () => {
    const defaultCity = "Vancouver";           
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=imperial&appid=40056036c1703d275c5175eb77a05d0d`).then(function(response){
            if(response.status == 404) {
                alert("Hey the city is wrong") 
                return;
            }
            response.json().then(function(data){
               console.log(data);
            })
            
            }).catch(function(error){
                console.log("error" + error);
            })
}

//Function to fetch the data when the user click on the buttom

fetchCurrentyData = () => {
    event.preventDefault();
    let currentCity = $("#name").val();
    console.log(currentCity);
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=imperial&appid=40056036c1703d275c5175eb77a05d0d`;
    fetch(url).then((response) => {
        let status = response.status;
        if(status !== 200) {
            console.log("Please check your response status" + status);
            return;
        }

        response.json().then((data) => {
            console.log(data);
        })
    })
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
    changeBackground();
    defaultState(); // call the function when the page is reload
    calcHeight();
    $(".searchBtn").on('click', () => {
        fetchCurrentyData();
    })
});