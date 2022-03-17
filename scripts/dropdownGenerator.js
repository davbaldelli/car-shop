
//prende in input il nome del bottone e restituisce l'html percui usarlo $(tag).html(creaDropdownBtn(nome))
export function creaDropdownBtn(nomebtn){
    return `<div class="dropdown" id="dropdown-me">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ${nomebtn}
                </button>
                <div class="dropdown-menu dropdown-multicol" aria-labelledby="dropdownMenuButton">
                </div>
            </div>
            `
}


//richiede un array e restituisce un array di elementi html
export function creaDropdownItems(oggetti){
    arr= new Array
    for(let i =0; i<abc.length; i++)
    {
        arr[i]=`<button class="dropdown-item" data-key="${oggetti[i]}">${oggetti[i]}</button>`
    }
    return arr
}

//prende l' arrey di creaDropdownItems e il numero di colonne retituendo l'html 
export function popolaDropdownContent(items, column){
    let tmp=0
    let a=""       
    for(let i=0; i<column; i++){    
        let b=""
        for(let j=0; j<(items.length/column); j++){
            b = b + items[tmp] 
            
            tmp++
        }
        a = a +`<div class="dropdown-col" >${b}</div>` 
    }
    return(a)
}

//aggiunge e all'head il css per le colonne multiple
export function aggiungiCssInHead(){
    let temp= $("head").html()
    $("head").html(temp + `<style>
        div.dropdown-multicol{
        width: auto;
        }
        div.dropdown-multicol>div.dropdown-col{
            display:inline-block;
            width: auto;
        }
    </style>`)
}