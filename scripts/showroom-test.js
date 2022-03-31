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
