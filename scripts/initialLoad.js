$.get("/cars/random", {}, (responseObj) => {
    let newContent = "";
    for (let i = 0; i < responseObj.length; i++) {
        newContent += '<div class="card">\n' +
            '                    <img src=' + responseObj[i].image + ' class="card-img-top" alt="car image">\n' +
            '                    <div class="card-body">\n' +
            '                        <h5 class="card-title">' + responseObj[i].brand + ' ' + responseObj[i].model + '</h5>\n' +
            '                        <p class="card-text">\n' +
            '                            ' + responseObj[i].bhp + ' BHP <br>\n' +
            '                            ' + responseObj[i].torque + ' Nm <br>\n' +
            '                        </p>\n' +
            '                        <p class="card-text">' + responseObj[i].price + ' $</p>\n' +
            '                    </div>\n' +
            '                </div>'
    }

    document.getElementById("carList").innerHTML = newContent;
    console.log(newContent)
})