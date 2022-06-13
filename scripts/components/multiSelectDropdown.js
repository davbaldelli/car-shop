export class MultiSelectDropdown {
    #state = []

    constructor(uniqueId,container, btnLabel, items, columns, onChange, onSelectedItem = () => {}, onUnselectedItem = () => {}){
        this.id = uniqueId
        this.container = container
        this.btnLabel = btnLabel
        this.items = items
        this.columns = columns
        this.onChange = onChange
        this.onSelectedItem = onSelectedItem
        this.onUnselectedItem = onUnselectedItem
    }

    generateDropdown(){
        this.container.html(this.#createDropdownBtn())
        $(`.multiselect-${this.id}-checkbox`).change(event => {
            if (event.currentTarget.checked) {
                this.#addItemToStatus(event.currentTarget.dataset.key)
            } else {
                this.#removeItemFromStatus(event.currentTarget.dataset.key)
            }
        })
    }

    removeElement(key){
        $(`.multiselect-${this.id}-checkbox[data-key='${key}']`).prop('checked',false)
        this.#removeItemFromStatus(key)
    }


    #addItemToStatus(key){
        let prev = [...this.#state]
        this.#state.push(key)
        this.onSelectedItem(key)
        this.onChange(this.#state, prev)
    }

    #removeItemFromStatus(key){
        let prev = [...this.#state]
        this.#state.splice(this.#state.indexOf(key), 1)
        this.onUnselectedItem(key)
        this.onChange(this.#state, prev)
    }

    #createDropdownBtn() {
        let grid = this.#createDropdownGridContent(this.items.map(item => this.#itemToCheckbox(item)), this.columns)
        return `<div class="dropdown" id="dropdown-me">
                <button class="btn btn-secondary dropdown-toggle filter-dropdown-btn" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                    ${this.btnLabel}
                </button>
                <div class="dropdown-menu dropdown-multicol" aria-labelledby="dropdownMenuButton">
                    ${grid}
                </div>
            </div>`
    }

     #createDropdownGridContent(htmlElems) {
        let a = ""
        for (let i = 0, tmp = 0; i < this.columns; i++) {
            let b = ""
            for (let j = 0; j < (htmlElems.length / this.columns) && tmp < htmlElems.length; j++, tmp++) {
                b = b + htmlElems[tmp]
            }
            a = a + `<div class="dropdown-col m-2" >${b}</div>`
        }
        return (a)
    }


    #itemToCheckbox(item){
        return `<div class="form-check m-1 multiselect-${this.id}-elem">
                    <input class="form-check-input multiselect-${this.id}-checkbox" type="checkbox" id="check-${item.name}" data-key="${item.name}" value="${item.name}"/>
                    <label class="form-check-label" for="check-${item.name}">${item.name}</label>
                </div>`
    }

}

