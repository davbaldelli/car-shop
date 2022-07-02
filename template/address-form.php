<div class="modal fade addNewAddressModal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="addressForm">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add New Address</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col">
                                <div class="form-group">
                                    <label for="firstNameInput" >First Name</label>
                                    <input class="form-control" name="first_name" type="text" id="firstNameInput" placeholder="Your First Name" required/>
                                </div>
                                <div class="form-group">
                                    <label for="lastNameInput">Last Name</label>
                                    <input class="form-control" name="last_name" type="text" id="lastNameInput" placeholder="Your Last Name" required/>
                                </div>
                                <div class="form-group">
                                    <label for="nation-select">Select Nation</label>
                                    <select class="form-control" id="nation-select" name="id_country">
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="administrativeAreaInput">State/Province/Region</label>
                                    <input name="administrative_area" class="form-control" type="text" id="administrativeAreaInput"
                                           placeholder="State/Province/Region" required/>
                                </div>
                                <div class="form-group">
                                    <label for="localityInput">Locality</label>
                                    <input name="locality" class="form-control" type="text" id="localityInput" placeholder="City/Town" required/>
                                </div>
                                <div class="form-group">
                                    <label for="zipInput">Postal Code</label>
                                    <input name="postal_code" class="form-control" type="text" id="zipInput" placeholder="Postal code" required/>
                                </div>
                                <div class="form-group">
                                    <label for="addressL1Input">Address Line 1</label>
                                    <input name="address_line_1" class="form-control" type="text" id="addressL1Input" placeholder="Es. Street,Lane" required/>
                                </div>
                                <div class="form-group">
                                    <label for="addressL2Input">Address Line 2</label>
                                    <input name="address_line_2" class="form-control" type="text" id="addressL2Input" placeholder="Es. Civic Number"/>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button id="address-form-submit" type="submit"  class="btn">Add Address</button>
                </div>
            </form>
        </div>
    </div>
</div>