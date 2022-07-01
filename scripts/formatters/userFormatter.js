import {addressToListItems} from "./addressesFormatter.js";

export function userToInfoPanel(user){
    return `
     <div class="row row-cols-2" id="userAccountHeader">
            <div class="col-lg-4" id="userPicturesContainer">
                <img id="userPictures" src="${user.avatar_image}" alt="profile pictures"/>
            </div>
            <div class="col-md-8" id="userNameContainer">
                ${user.username}
            </div>
        </div>
        <div class="row">
            <div class="col" id="userInfoRow">
                <ul class="list-group list-group-flush" id="userInfoListGroup">
                    <li class="list-group-item user-info-list-item flex flex-row">
                        <div class="user-name flex flex-column flex-grow-1">
                            <span class="list-item-title">Name:</span>
                            <span class="user-name-span">
                                ${user.name}
                            </span>
                        </div>
                        <div class="user-name flex flex-column flex-grow-1">
                            <span class="list-item-title">Surname:</span>
                            <span class="user-name-span">
                                ${user.last_name}
                            </span>
                        </div>
                    </li>
                    <li class="list-group-item user-info-list-item">
                        <span class="list-item-title">
                            My Addresses
                        </span>
                        <ol id="userAddresses">
                            ${addressToListItems(user.addresses).reduce((r,i) => r + i,"")}
                        </ol>
                    </li>
                    <li class="list-group-item user-info-list-item flex flex-row">
                        <div class="flex flex-column flex-grow-1">
                            <span class="list-item-title">
                                Favourite Car Type
                            </span>
                            <span>
                                ${user.fav_car_type}
                            </span>
                        </div>
                        <div class="flex flex-column flex-grow-1">
                             <span class="list-item-title">
                                Favourite Brand
                            </span>
                            <span>
                                ${user.fav_car_brand}
                            </span>
                        </div>

                    </li>
                    <li class="list-group-item user-info-list-item flex flex-column">
                        <span class="list-item-title">
                            How much I spent
                        </span>
                        <span class="flex flex-row gap-2">
                            <span class="padding-block-1">You spent:</span>&nbsp;<div class="creditReveal padding-block-1 padding-inline-1">${user.tot_money_spent}</div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    `
}