export function carsToCards(cars) {
    return cars.map(car => {
        return `<a class="card-link" href="/product.php?id=${car.id}"><div class="card m-3 car-card"  id="cardCarContent">
                    <img src="${car.image}" class="card-img-top card-img-top-car" alt="car image" loading="lazy">
                    <div class="card-body">
                       <span class="card-title card-title-car truncate"> ${car.brand} ${car.model} </span>
                       <p class="card-text">
                           ${car.bhp} BHP <br>
                           ${car.torque} Nm <br>
                       </p>
                       <p class="card-text">${car.price} $</p>
                    </div>
                </div></a>`
    })
}

export function carsToCarouselElems(cars) {
    return cars.map((car, i) => {
        return `<div class="carousel-item ${i === 0 ? "active" : ""}">
                    <img src="${car.image}" class="d-block w-100 carousel-item-img" alt="car thumbnail">
                </div>`
    })
}

export function carToInfoPanel(car) {
    return `    
                <div class="row">
                    <div class="col">
                        <div class="divcar-img">
                           <img class="car-img" src="${car.image}" alt="car detail image">
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col">
                        <h3 class="car-model">${car.model}</h3>
                        <div class="divbtn">
                            <button id="addToCartBtn" type="button" class="btn-buy"><span class="car-price">Aggiungi al carrello: $${car.price}</span></button>
                        </div>
                    </div>
                </div>
                
                <div class="row product-page-row">        
                    <div class="col-md car-info"><div class="row car-info-header ">Brand</div>          <div class="row">${car.brand}</div></div>
                    <div class="col-md car-info"><div class="row car-info-header ">Horse Power</div>    <div class="row">${car.bhp}</div></div>
                    <div class="col-md car-info"><div class="row car-info-header ">Fuel</div>           <div class="row">${car.fuel_type}</div></div>
                    <div class="col-md car-info"><div class="row car-info-header ">Transission</div>    <div class="row">${car.transmission}</div></div>
                    <div class="col-md car-info"><div class="row car-info-header ">Drive Train</div>    <div class="row">${car.drivetrain}</div></div>
                </div>

`
}

export function carToOrderCard(cars) {
    return cars.map(car => {
        return `<div>ordered car card</div>`
    })
}