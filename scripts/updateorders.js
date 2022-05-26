import {updateOrder} from "./orderLoader.js";

$(() => {
    $(".updateOrderBtn").click(evt => {
        let data = {id : evt.currentTarget.dataset.key, state : evt.currentTarget.dataset.state}
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWQiOjN9.HCDUEWtRKUDu4Z30wIiDcfK-61vjXsf3i7Pp40I-Ga0"
        updateOrder("api/user/admin/updateorder.php", {Token : token}, data, res => console.log(res))
    })
})