<?php
    require ("address-form.php")
?>
<div class="col-0 col-md-2"></div>
<div  class="col-12 col-md-8">
    <div class="container" id="accountMainContainer">
        <div class="row row-cols-2" id="userAccountHeader">
            <div class="col-lg-4" id="userPicturesContainer">
                <img id="userPictures" src="/src_img/standard-pictures.png" alt="profile pictures"/>
            </div>
            <div class="col-md-8" id="userNameContainer">
            </div>
        </div>
        <div class="row">
            <div class="col" id="userInfoRow">
                <ul class="list-group list-group-flush" id="userInfoListGroup">
                    <li class="list-group-item user-info-list-item grid grid-col-2fr">
                        <div class="user-name flex flex-column flex-grow-1">
                            <span class="list-item-title">Name:</span>
                            <span class="user-name-span">
                                Leonardo
                            </span>
                        </div>
                        <div class="user-name flex flex-column flex-grow-1">
                            <span class="list-item-title">Surname:</span>
                            <span class="user-name-span">
                                Armuzzi
                            </span>
                        </div>
                    </li>
                    <li class="list-group-item user-info-list-item">
                        <span class="list-item-title">
                            My Addresses
                        </span>
                        <ol id="userAddresses">
                            <li class="user-address-item">
                                address 1
                            </li>
                            <li class="user-address-item">
                                address 2
                            </li>
                            <li class="user-address-item">
                                address 3
                            </li>
                            <li class="user-address-item">
                                address 4
                            </li>
                        </ol>
                    </li>
                    <li class="list-group-item user-info-list-item grid grid-col-2fr">
                        <div class="flex flex-column flex-grow-1">
                            <span class="list-item-title">
                                Favourite Car Type
                            </span>
                            <span>
                                Berlina
                            </span>
                        </div>
                        <div class="flex flex-column flex-grow-1">
                             <span class="list-item-title">
                                Favourite Brand
                            </span>
                            <span>
                                BMW
                            </span>
                        </div>

                    </li>
                    <li class="list-group-item user-info-list-item flex flex-column">
                        <span class="list-item-title">
                            How much I spent
                        </span>
                        <span class="flex flex-row gap-2">
                            <span class="padding-block-1">You spent:</span>&nbsp;<div class="creditReveal padding-block-1 padding-inline-1">XXXX</div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="col-0 col-md-2"></div>

