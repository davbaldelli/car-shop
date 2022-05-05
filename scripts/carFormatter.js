export function carsToCards(cars) {
    return cars.map(car => {
        return `<a class="card-link" href="/product.php?id=${car.id}"><div class="card m-3 car-card"  id="cardCarContent">
                    <img src="${car.image}" class="card-img-top card-img-top-car" alt="car image">
                    <div class="card-body">
                       <h5 class="card-title"> ${car.brand} ${car.model} </h5>
                       <p class="card-text">
                           ${car.bhp} BHP <br>
                           ${car.torque} Nm <br>
                       </p>
                       <p class="card-text">${car.price} $</p>
                    </div>
                </div></a>`
    })
}

export function carsToCarouselElems(cars){
    return cars.map((car, i) => {
        return `<div class="carousel-item ${i===0 ? "active" : ""}">
                    <img src="${car.image}" class="d-block w-100" alt="car thumbnail">
                </div>`
    })
}

export function carToInfoPanel(car){
    console.log(car)
    return  `   

                <div class="divcar-img">
                    <img class="car-img" src="${car.image}" alt="car detail image">
                </div>
                <h3 class="car-model">${car.model}</h3>
                <div class="divbtn">
                    <button type="button" class="btn btn-buy"><span class="car-price">Aggiungi al carrello: $${car.price}</span></button>
                </div>
                
                <div class="divcar-info">        
                    <p class="car-info">Marca: ${car.brand}</p>
                    <p class="car-info">BHP: ${car.bhp}</p>
                    <p class="car-info">Carburante: ${car.fuel_type}</p>
                    <p class="car-info">Cambio: ${car.transmission}</p>
                    <p class="car-info">Ruote motrici: ${car.drivetrain}</p>
                </div>`
}