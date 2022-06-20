import {carsToCarouselElems} from "./formatters/carFormatter.js";
import {getRandomCars} from "./store/carsStore.js";

//load the given function when the page is loaded
$(() => {
    getRandomCars(setCarouselContent)
    const urlParams = new URLSearchParams(window.location.search);
    let login = urlParams.get('login');
    if(login){
        let loginContainer = $(".login-container")
        loginContainer.toggleClass("form-hidden");
        loginContainer.toggleClass("form-active");
        $(document).on('login', () => {
            location.href = "index.php"
        })
    }
})

function setCarouselContent(cars) {
    $("#carousel-content").html(carsToCarouselElems(cars).reduce((s, val) => s + val, ""))
}
