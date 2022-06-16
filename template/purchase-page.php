<div class="modal fade addNewAddressModal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">

        <div class="modal-content">
            <form id="addAddressForm">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Add New Address</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div><form id="addAddressForm">
            <div class="modal-body">
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="firstNameInput">First Name</label>
                            <input class="form-control" type="text" id="firstNameInput" placeholder="Your First Name"/>
                        </div>
                        <div class="form-group">
                            <label for="lastNameInput">Last Name</label>
                            <input class="form-control" type="text" id="lastNameInput" placeholder="Your Last Name"/>
                        </div>
                        <div class="form-group">
                            <label for="nation-select">Select Nation</label>
                            <select class="form-control" id="nation-select">
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="administrativeAreaInput">State/Province/Region</label>
                            <input class="form-control" type="text" id="administrativeAreaInput"
                                   placeholder="State/Province/Region"/>
                        </div>
                        <div class="form-group">
                            <label for="localityInput">Locality</label>
                            <input class="form-control" type="text" id="localityInput" placeholder="City/Town"/>
                        </div>
                        <div class="form-group">
                            <label for="zipInput">Postal Code</label>
                            <input class="form-control" type="text" id="zipInput" placeholder="Postal code"/>
                        </div>
                        <div class="form-group">
                            <label for="addressL1Input">Address Line 1</label>
                            <input class="form-control" type="text" id="addressL1Input" placeholder="Es. Street,Lane"/>
                        </div>
                        <div class="form-group">
                            <label for="addressL2Input">Address Line 2</label>
                            <input class="form-control" type="text" id="addressL2Input" placeholder="Es. Civic Number"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit"  class="btn btn-primary">Add Address</button>
            </div>
                </form>
        </div>
    </div>
</div>
<div id="purchaseConfirmModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Payment Confirmed</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Thanks for your purchase, you can review your orders here</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <a id="goToUserOrders" type="button" class="btn btn-primary" >View Orders</a>
            </div>
        </div>
    </div>
</div>




<section id="purchaseMainContainer" class="container-fluid">
    <div id="userFeedbackToast" class="toast align-items-center text-bg-primary border-0 position-absolute end-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body" id="toastContent">

            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
    <div class="row">
        <div class="col-sm"></div>

        <div class="col-xxl-6">
            <div class="row">
                <div class="col-xxl-9">
                    <div class="accordion accordion-flush" id="accordionFlush">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                Shipping Address
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <span id="addressesList" class="vstack"></span> </br>
                                <button type="button" id="newShippingAddressBtn" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Add new shipping address
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Payment method
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        CarShop Credits: <span id="currentCreditsOwn"></span>
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioPayPal" disabled>
                                    <label class="form-check-label" for="flexRadioPayPal">
                                        PayPal
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioCreditCard" disabled>
                                    <label class="form-check-label" for="flexRadioCreditCard">
                                        Credit Card
                                    </label>
                                </div>
                                <div class="dropdown">
                                    <a class=" btn dropdown-toggle" id="addCreditDropdown" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        Add Credit
                                    </a>
                                    <form class="dropdown-menu" id="rechargeWalletForm">
                                        <div class="form-group">
                                            <input class="form-control" type="number" id="creditInput" placeholder="Enter credits">
                                        </div>
                                        <button class="btn" id="rechargeWalletBtn" type="submit">Add credits</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Your shopping cart
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul class="list-group list-group-flush" id="productsList">

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col-md-3">
                    <div class="row">
                        <div id="checkOut">

                            <ul id="itemPriceList">

                            </ul>
                            <span>Totale: <strong id="subtotal"></strong></span>
                            <button id="purchaseBtn" class="btn btn-primary" >Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm"> </div>
    </div>
</section>
