export function carsToCards(cars) {
    let cards = [];
    for (let i = 0; i < cars.length; i++) {
        cards.push(
            `<div class="card m-3">
                <img src=${cars[i].image} class="card-img-top" alt="car image">
                <div class="card-body">
                   <h5 class="card-title"> ${cars[i].brand} ${cars[i].model} </h5>
                   <p class="card-text">
                       ${cars[i].bhp} BHP <br>
                       ${cars[i].torque} Nm <br>
                   </p>
                   <p class="card-text">${cars[i].price} $</p>
                </div>
            </div>`)
    }
    return cards
}

export function carsToCarouselElems(cars){
    let items = [];
    for (let i = 0; i < cars.length; i++){
        items.push(
            `<div class="carousel-item ${i===0 ? "active" : ""}">
                <img src="${cars[i].image}" class="d-block w-100" alt="car thumbnail">
            </div>
            `
        )
    }
    return items;
}