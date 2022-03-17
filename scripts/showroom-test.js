import {getCars} from "./carLoader.js"
import {setCarGridContent} from "./showroom.js"

export function createDropdownBtn(){
    $("#abc").html(
        `<div class="dropdown" id="brand-menu">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                Choose a car brand
            </button>
            <div class="dropdown-menu">
            </div>
        </div>`
    )
}

export function setBrandDropDownContent(items){
    $("#brand-menu .dropdown-menu").html(items)
    $("#brand-menu .dropdown-menu a .dropdown-item").click((event) => {
        getCars("api/cars/brand", {name : event.currentTarget.dataset.key}, setCarGridContent)
    })
}