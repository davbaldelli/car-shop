export function carsToCards(cars) {
    let cards = "";
    for (let i = 0; i < cars.length; i++) {
        cards +=
            `<div class="card">
                <img src=${cars[i].image} class="card-img-top" alt="car image">
                <div class="card-body">
                   <h5 class="card-title"> ${cars[i].brand} ${cars[i].model} </h5>
                   <p class="card-text">
                       ${cars[i].bhp} BHP <br>
                       ${cars[i].torque} Nm <br>
                   </p>
                   <p class="card-text">${cars[i].price} $</p>
                </div>
            </div>`
    }
    return cards
}