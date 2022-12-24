// Preloader
// ---------------------------------------------------------------
window.onload = function () {
    document.body.classList.add('loaded');
}
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}
// ---------------------------------------------------------------

// Menu opening
const openMenu = () => {
    document.getElementById("menuBox").style.display = "block"
    document.getElementById("menuOptionsBox").style.display = "block"
    document.getElementById("main-box").style.display = "none"
}
// ---------------------------------------------------------------

// Menu closing
const closeMenu = () => {
    document.getElementById("menuBox").style.display = "none"
    document.getElementById("menuOptionsBox").style.display = "none"
    document.getElementById("main-box").style.display = "block"
}
// ---------------------------------------------------------------

// Main page opening
const openMainPage = () => {
    window.location = 'mainPage.html'
}
// ---------------------------------------------------------------

// Gallery page opening
const openEarthImagesPage = () => {
    window.location = 'EarthImages.html'
}
// ---------------------------------------------------------------


const getAsteroidData = () => {
    // Asteroid name receiving
    let asteroidIDInputByUser = document.getElementById("asteroid").value
    console.log(asteroidIDInputByUser)

    // Request sending
    const data_request = new XMLHttpRequest()
    let link = "https://api.nasa.gov/neo/rest/v1/neo/" + asteroidIDInputByUser + "?api_key=vE3LcgDVAYvUZRNTtD81THxwpITwOmSKy3HPVnSx"
    console.log(link)
    data_request.open("GET", link)
    data_request.onload = () => {
        let data = JSON.parse(data_request.response)
        document.getElementById("asteroid-info-name").innerText = "Name: " + data.name
        document.getElementById("asteroid-info-diameter").innerText = "Diameter: " + data.estimated_diameter.meters.estimated_diameter_max + "m"
        document.getElementById("ateroid-info-date").innerText = "Discovery date: " + data.orbital_data.first_observation_date

        console.log(data)
    }
    data_request.send()
}
// ---------------------------------------------------------------

const getRoverPhoto = () => {
    // Asteroid name receiving
    let SOLInputByUser = document.getElementById("rover").value
    console.log(SOLInputByUser)

    // Request sending
    const data_request = new XMLHttpRequest()
    let link = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + SOLInputByUser + "&api_key=vE3LcgDVAYvUZRNTtD81THxwpITwOmSKy3HPVnSx"
    console.log(link)
    data_request.open("GET", link)
    data_request.onload = () => {
        let data = JSON.parse(data_request.response)
        let random_photo = Math.round(Math.random() * data.photos.length)
        document.getElementById("rover-info-img").src = data.photos[random_photo].img_src
        document.getElementById("rover-info-photoID").innerText = "Photo ID: " + data.photos[random_photo].id
        document.getElementById("rover-info-camera-name").innerText = "Camera: " + data.photos[random_photo].camera.full_name
        document.getElementById("rover-info-camera-earth-date").innerText = "Earth date: " + data.photos[random_photo].earth_date
        document.getElementById("rover-info-source-link").setAttribute("href", data.photos[random_photo].img_src)

        console.log(data)
    }
    data_request.send()
}
// ---------------------------------------------------------------

const getImageOfTheDay = () => {
    // Request sending
    const data_request = new XMLHttpRequest()
    let link = "https://api.nasa.gov/planetary/apod?api_key=vE3LcgDVAYvUZRNTtD81THxwpITwOmSKy3HPVnSx"
    console.log(link)
    data_request.open("GET", link)
    data_request.onload = () => {
        let data = JSON.parse(data_request.response)
        document.getElementById("imageOfTheDay").src = data.hdurl
        document.getElementById("content-box-4-description").innerText = "Description:\n\n " + data.explanation + "\n\n\n Date: " + data.date

        console.log(data)
    }
    data_request.send()
}

document.addEventListener("DOMContentLoaded", getImageOfTheDay())
// ---------------------------------------------------------------

const getEarthImage = () => {
    // Receiving longitude and attitude
    let longitudeInputByUser = document.getElementById("longitude-input").value
    let attitudeInputByUser = document.getElementById("attitude-input").value

     // Request sending
     const data_request = new XMLHttpRequest()
     let link = "https://api.nasa.gov/planetary/earth/imagery?lon=" +  longitudeInputByUser + "&lat=" + attitudeInputByUser + "&date=" + Date.now() + "&api_key=vE3LcgDVAYvUZRNTtD81THxwpITwOmSKy3HPVnSx"
     console.log(link)
     data_request.open("GET", link)
     data_request.onload = () => {
         let data = JSON.parse(data_request.response)
         document.getElementById("imageOfTheDay").src = data.hdurl
         document.getElementById("content-box-4-description").innerText = "Description:\n\n " + data.explanation + "\n\n\n Date: " + data.date
 
         console.log(data)
     }
     data_request.send()
}
// ---------------------------------------------------------------

