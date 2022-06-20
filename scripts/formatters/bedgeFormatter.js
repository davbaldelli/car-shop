export function keyValueToBadge(key, label){
    return `<div class="badge rounded-pill filter-badge" data-key="${key}">
                <div class="d-flex flex-row align-items-center">
                    <div class="m-1">${label}</div>
                    <button type="button" class="btn-close btn-close-white badge-close-btn" aria-label="Close" data-key="${key}"></button>
                 </div>
            </div>`
}