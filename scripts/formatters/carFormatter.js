const carTypes = new Map([["coupe" , "Coupè"], ["sedan", "Sedan"], ["station_wagon", "Station Wagon"], ["van", "Minivan"], ["convertible", "Convertible"], ["suv", "Suv"]])
const carTransmission = new Map([["MANUAL", "Manual"], ["SEQUENTIAL", "Sequential"]])

export function carsToCards(cars) {
    return cars.map(car => {
        return `<a class="card-link" href="/product.php?id=${car.id}"><div class="card m-3 car-card"  id="cardCarContent">
                    <img src="${car.image}" class="card-img-top card-img-top-car" alt="car image" loading="lazy">
                    <div class="card-body">
                       <span class="card-title card-title-car truncate"> ${car.brand} ${car.model} </span>
                       <p class="card-text  d-flex flex-row align-items-center">
                           <span class="card-bhp"></span> &nbsp; ${car.bhp} BHP
                       </p>
                       <p class="card-text d-flex flex-row align-items-center">
                           <span class="card-torque"></span> &nbsp; ${car.torque} Nm
                       </p>
                       <p class="card-text">${car.price} $</p>
                    </div>
                </div></a>`
    })
}

export function carsToCarouselElems(cars) {
    return cars.map((car, i) => {
        return `<div class="carousel-item ${i === 0 ? "active" : ""}">
                    <a href="/product.php?id=${car.id}"> <img src="${car.image}" class="d-block w-100 carousel-item-img" alt="car thumbnail"></a>
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
                
                <div class="row ">
                    <div class="col product-page-row car-info-row">        
                        <div class="car-info"><div class="row car-info-header ">Drivetrain</div>    <div class="row">${car.drivetrain}</div></div>
                        <div class="car-info"><div class="row car-info-header ">Brand</div>         <div class="row">${car.brand}</div></div>
                        <div class="car-info"><div class="row car-info-header ">Chassis</div>    <div class="row">${carTypes.get(car.car_type)}</div></div>
                        <div class="car-info"><div class="row car-info-header ">Horse Power</div>    <div class="row">${car.bhp}</div></div>
                        <div class="car-info"><div class="row car-info-header ">Fuel</div>           <div class="row">${car.fuel_type.charAt(0).toUpperCase() + car.fuel_type.slice(1)}</div></div>
                        <div class="car-info"><div class="row car-info-header ">Transmission</div>    <div class="row">${carTransmission.get(car.transmission)}</div></div>                       
                    </div>
                </div>

`
}

export function carToOrderCard(cars) {
    return cars.map(car => {
        return `<div>ordered car card</div>`
    })
}