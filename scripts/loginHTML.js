$(() => {
    $('.div-ico').tooltip({ boundary: 'window' })
    $(".nav-login").click(function(){
        $(".login-container").toggleClass("form-hidden");
        $(".login-container").toggleClass("form-active"); 
    });
    $(".btn-close").click(function(){
        $(".login-container").toggleClass("form-hidden");
        $(".login-container").toggleClass("form-active");  
    });  
})