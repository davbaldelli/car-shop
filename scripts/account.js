
$(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    generateUserName(user)

})

function generateUserName(user){
    $("#userNameContainer").html(`
        <span id="userName">${user.username}</span> <span></span>
    `)
}

