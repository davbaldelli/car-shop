//prende in input il nome del bottone e restituisce l'html 
function createDropdownBtn(label, items){
    let list = createDropdownListContent(items) 
    return `<div class="dropdown" id="dropdown-me">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ${label}
                </button>
                <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                    ${list}
                </div>
            </div>
            `
}

//prende l' array di creaDropdownItems e il numero di colonne retituendo l'html
function createDropdownListContent(items){      
    return items.reduce((r,item)=> r + `<li class="dropdown-item" data-key="${item.value}">${item.name}</li>`,"")
}



export function generateSinglePickDropdown(nomeDiv, nomeBtn, items, onSelected = () => {}, onUnselected = () => {}){
    $(`#${nomeDiv}`).html(createDropdownBtn(nomeBtn, items))
    $(".dropdown-item").click(event => {  
        onSelected(event.currentTarget.dataset.key)
    })
}