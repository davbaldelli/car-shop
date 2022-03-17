export function brandsToCards(brands){
    return brands.map(brand => {
        return `<a href="brand.php?name=${brand.name}">
                    <div class="card m-3 card-brand" data-key="${brand.name}">
                        <img src="${brand.logo}" class="card-img-top card-image-fit p-2" alt="brand logo">
                        <div class="card-body">
                            <h5 class="card-title text-center"> ${brand.name} </h5>
                        </div>
                    </div>
                </a>`
    })
}

export function brandsToDropDownItems(brands){
    return brands.map(brand => `<li><button class="dropdown-item" data-key="${brand.name}">${brand.name}</button></li>`)
}
