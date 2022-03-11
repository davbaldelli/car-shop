export function generateBrandList(initialValue, nextValue) {
    return initialValue + nextValue
}

export function generateBrandGrid(initialValue, nextValue) {
    return initialValue + `
    <div class="col-12 col-md-4">
            ${nextValue}
    </div>
    `
}