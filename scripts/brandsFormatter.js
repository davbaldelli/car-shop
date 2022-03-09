export function brandsToCards(brands){
    return brands.map(brand => {
        return `<div class="card m-3" style="height: 300px">
                    <img src="${brand.logo}" class="card-img-top p-2" alt="brand logo" style="height: 100%; object-fit: contain;">
                    <div class="card-body">
                        <h5 class="card-title text-center"> ${brand.name} </h5>
                    </div>
                </div>`
    })
}

export function brandsToDropDownItems(brands){
    return brands.map(brand => `<li><button class="dropdown-item">${brand.name}</button></li>`)
}
