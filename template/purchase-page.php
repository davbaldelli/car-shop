<?php
require("address-form.php")
?>
<div id="staticBackdrop2" class="modal fade purchase-confirm-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel2">Payment Confirmed</h5>
            </div>
            <div class="modal-body">
                <p>Thanks for your purchase, you can review your orders here</p>
            </div>
            <div class="modal-footer">
                <a id="goToUserOrders" type="button" class="btn" >View Orders</a>
            </div>
        </div>
    </div>
</div>
<section id="purchaseMainContainer" class="container-fluid">
    <div id="userFeedbackToast" class="toast align-items-center text-bg-primary border-0 position-absolute end-0 custom-toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body" id="toastContent">

            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
    <div class="row">
        <div class="col-sm"></div>
        <div class="col-xxl-8">
            <div class="row">
                <div class="col-lg-9">
                    <div class="accordion accordion-flush" id="accordionFlush">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <div class="accordion-button accordion-button-custom" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                Shipping Address
                            </div>
                        </h2>
                        <div id="flush-collapseOne" class=" show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
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
                            <div class="accordion-button accordion-button-custom">
                                Payment method
                            </div>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse show" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <div>
                                    <input type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                                    <label for="flexRadioDefault1">
                                        CarShop Credits: <span id="currentCreditsOwn"></span>
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" name="flexRadioDefault" id="flexRadioPayPal" disabled>
                                    <label for="flexRadioPayPal">
                                        PayPal
                                    </label>
                                </div>
                                <div>
                                    <input type="radio" name="flexRadioDefault" id="flexRadioCreditCard" disabled>
                                    <label for="flexRadioCreditCard">
                                        Credit Card
                                    </label>
                                </div>
                                <div class="dropdown mt-4">
                                    <a class=" btn dropdown-toggle" id="addCreditDropdown" href="#" role="button"  data-bs-toggle="dropdown" aria-expanded="false">
                                        Add Credit
                                    </a>
                                    <form class="dropdown-menu" id="rechargeWalletForm">
                                        <label for="creditInput" style="display: none">Insert credit</label>
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
                            <div class="accordion-button accordion-button-custom"  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Your shopping cart
                            </div>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse show" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul class="list-group list-group-flush" id="productsList">

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col-md">
                    <div class="row">
                        <div class="col-fluid">
                            <div id="checkOut">
                                <span> Your shopping list: </span>
                                <ul id="itemPriceList">

                                </ul>
                                <span>Totale: <strong id="subtotal"></strong></span>
                                <button id="purchaseBtn" class="btn " >Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm"> </div>
    </div>
</section>
