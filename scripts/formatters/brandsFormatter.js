export function brandsToCards(brands) {
    return brands.map(brand => {
        return `<a class="card-link" href="/brand.php?name=${brand.name}">
                    <div class="card m-3 card-brand"  data-key="${brand.name}">
                        <img src="${brand.logo}" class="card-img-top card-image-fit p-2" alt="brand logo" loading="lazy">
                        <div class="card-body">
                            <h3 class="card-title text-center"> ${brand.name} </h3>
                        </div>
                    </div>
                </a>`
    })
}

export function brandsToSelectOptions(brands) {
    return brands.map(brand => `<option value="${brand.id}">${brand.name}</option>`)
}
