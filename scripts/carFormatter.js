export function carsToCards(cars) {
    return cars.map(car => {
        return `<div class="card m-3">
                    <img src="${car.image}" class="card-img-top" alt="car image">
                    <div class="card-body">
                       <h5 class="card-title"> ${car.brand} ${car.model} </h5>
                       <p class="card-text">
                           ${car.bhp} BHP <br>
                           ${car.torque} Nm <br>
                       </p>
                       <p class="card-text">${car.price} $</p>
                    </div>
                </div>`
    })
}

export function carsToCarouselElems(cars){
    return cars.map((car, i) => {
        return `<div class="carousel-item ${i===0 ? "active" : ""}">
                    <img src="${car.image}" class="d-block w-100" alt="car thumbnail">
                </div>`
    })
}