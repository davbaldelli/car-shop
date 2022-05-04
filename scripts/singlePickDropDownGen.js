//prende in input il nome del bottone e restituisce l'html 
function createDropdownBtn(label, items, columns){
    let grid = createDropdownGridContent(items.map(item => `<div class="chkbx"><input class="dropdown-item inputChkbx" type="radio" id="${item.name}" data-key="${item.name}" name="${item.name} value="${item.name}"/><label class="chkLabel" for="${item.name}"> ${item.name}</label></div>`), columns)
    return `<div class="dropdown" id="dropdown-me">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ${label}
                </button>
                <div class="dropdown-menu dropdown-multicol" aria-labelledby="dropdownMenuButton">
                    ${grid}
                </div>
            </div>
            `
}

//prende l' array di creaDropdownItems e il numero di colonne retituendo l'html
function createDropdownGridContent(items, columns){
    let a=""       
        for(let i=0, tmp=0; i<columns; i++){
            let b=""
            for(let j=0; j<(items.length/columns) && tmp<items.length; j++,tmp++){
                b = b + items[tmp] 
            }
            a = a +`<div class="dropdown-col" >${b}</div>` 
        }
    return(a)
}

let state = ""

export function generateSinglePickDropdown(nomeDiv, nomeBtn, items, columns, onSelected = () => {}, onUnselected = () => {}){
    console.log(items)
    $(`#${nomeDiv}`).html(createDropdownBtn(nomeBtn, items, columns))
    $(".dropdown-item").change(event => {
        if(event.currentTarget.checked){
            state=event.currentTarget.dataset.key
            onSelected(state)
        } else {
            state = ""
            onUnselected()
        }
    })
}