export class SingleSelectionDropdown{

    #lastSelected = ""
    #id;
    #label;
    #container;
    #items;
    #onSelectedItem;

    constructor(uniqueId, container, label, items, onSelectedItem = () => {}) {
        this.#id = uniqueId
        this.#container = container
        this.#label = label
        this.#items = items
        this.#onSelectedItem = onSelectedItem
    }

    generateDropdown() {
        this.#container.html(this.#createDropdownBtn())
        $(`.single-select-dropdown-${this.#id}-elem`).click(event => {
            this.#onSelectedItem(event.currentTarget.dataset.key, this.#lastSelected)
            this.#lastSelected = event.currentTarget.dataset.key
        })
    }

    #createDropdownBtn() {
        let list = this.#createDropdownListContent()
        return `<div class="dropdown sigle-selection-dropdown-${this.#id}" id="dropdown-me">
                <button class="dropdown-toggle filter-dropdown-btn" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ${this.#label}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    ${list}
                </div>
            </div>
            `
    }

    #createDropdownListContent() {
        return this.#items.reduce((r, item) => r + `<li class="dropdown-item single-select-dropdown-${this.#id}-elem" data-key="${item.value}">${item.name}</li>`, "")
    }
}