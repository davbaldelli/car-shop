import {deleteAddress, getUserInfo, updateUserAddress} from "./store/userStore.js";
import {userToInfoPanel} from "./formatters/userFormatter.js";
import {getAllNations} from "./store/nationsStore.js";
import {nationsToSelectElements} from "./formatters/nationsFormatter.js";

let AddressModal = new bootstrap.Modal($(".addNewAddressModal"), {
    keyboard: false
})

$(() => {
    getUserInfo(setUserInfoPanelContent, (user) => {
        let addresses = user.addresses.reduce((r,i) => r.set(i.id, i), new Map())
        getAllNations(setupNationsSelectOptions)
        $(".editAddressBtn").click(function() {
            let id = $(this).data("key")
            let address = addresses.get(id)
            console.log(address)
            $("#addressForm").data("orderId", id)
            $("#firstNameInput").val(address.first_name)
            $("#lastNameInput").val(address.last_name)
            $("#nation-select").val(address.id_country)
            $("#administrativeAreaInput").val(address.administrative_area)
            $("#localityInput").val(address.locality)
            $("#zipInput").val(address.postal_code)
            $("#addressL1Input").val(address.address_line_1)
            $("#addressL2Input").val(address.address_line_2)
            AddressModal.toggle()
        })
        $(".removeAddressBtn").click(function() {
            let id = $(this).data("key")
            let address = addresses.get(id)
            deleteAddress(address, () => {
                getUserInfo(setUserInfoPanelContent)
            })
        })
        $("#addressForm").submit(function(e) {
            e.preventDefault()
            let user = JSON.parse(localStorage.getItem("user"))
            let address = $(this).serializeArray().reduce(function (json, { name, value }) {
                json[name] = value;
                return json;
            }, {});
            console.log(address)
            updateUserAddress({
                ...address,
                id_user : user.userId,
                id : $(this).data("orderId")
            }, () => {
                AddressModal.toggle()
                getUserInfo(setUserInfoPanelContent)
            })

        })
    })

})

function setUserInfoPanelContent(user){
    $("#accountMainContainer").html(userToInfoPanel(user))
}

function setupNationsSelectOptions(nations) {
    $("#nation-select").html(nationsToSelectElements(nations).reduce((res, el) => res + el, ""))
}


