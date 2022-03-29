//prende in input il nome del bottone e restituisce l'html percui usarlo $(tag).html(creaDropdownBtn(nome))
function creaDropdownBtn(nomebtn, objs, column){

    let items=creaDropdownItems(objs)
    let codice = popolaDropdownContent(items, column)
    return `<div class="dropdown" id="dropdown-me">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ${nomebtn}
                </button>
                <div class="dropdown-menu dropdown-multicol" aria-labelledby="dropdownMenuButton">
                    ${codice}
                </div>
            </div>
            `
}


//richiede un array e restituisce un array di elementi html
function creaDropdownItems(oggetti){
    return oggetti.map(item => `<button class="dropdown-item" data-key="${item.name}">${item.name}</button>`)
}

//prende l' arrey di creaDropdownItems e il numero di colonne retituendo l'html 
function popolaDropdownContent(items, column){
    let a=""       
        for(let i=0, tmp=0; i<column; i++){    
            let b=""
            for(let j=0; j<(items.length/column) && tmp<items.length; j++,tmp++){
                b = b + items[tmp] 
            }
            a = a +`<div class="dropdown-col" >${b}</div>` 
        }
    return(a)
}



export function generateExtendedDropdown(nomeDiv, nomeBtn, elements, columns, onChange, onSelected, onUnselected){
   
    $(nomeDiv).html(creaDropdownBtn(nomeBtn, elements, columns))   
    $(".dropdown-item").change(event => {
        if(this.checked){
            onSelected(event.currentTarget.dataset.key)
            let prev = state
            state.push(event.currentTarget.dataset.key)
            onChange(prev, state)
        }else{
            onUnselected(event.currentTarget.dataset.key)
            let tmp = state
            state.filter(e => e !== event.currentTarget.dataset.key)
            onChange(tmp, state)
        }
        
    })
    
}
