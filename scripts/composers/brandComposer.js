export function generateBrandList(initialValue, nextValue) {
    return initialValue + nextValue
}

export function generateBrandGrid(initialValue, nextValue) {
    return initialValue + `
    <div class="col-12 col-sm-6 col-xl-4">
            ${nextValue}
    </div>
    `
}