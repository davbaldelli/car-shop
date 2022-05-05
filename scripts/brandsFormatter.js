export function brandsToCards(brands){
    return brands.map(brand => {
        return `<a class="card-link" href="/brand.php?name=${brand.name}">
                    <div class="card m-3 card-brand" id="cardBrandContent" data-key="${brand.name}">
                        <img src="${brand.logo}" class="card-img-top card-image-fit p-2" alt="brand logo">
                        <div class="card-body">
                            <h5 class="card-title text-center"> ${brand.name} </h5>
                        </div>
                    </div>
                </a>`
    })
}

export function brandsToDropDownItems(brands){
    return brands.map(brand => `<a><button class="dropdown-item" data-key="${brand.name}">${brand.name}</button></a>`)
}
