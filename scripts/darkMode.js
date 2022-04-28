export function darkModeGlobal(){
    $(".navbar").toggleClass("navbar-dark bg-dark")
    $(".navbar").toggleClass("navbar-light bg-light")
    $("body").toggleClass("body-light")   
}

var change=false;
export function darkModeIndex(){   
    if(change==false){
        $('link[href="/css/index_dark.css"]').attr('href','/css/index_light.css');
        change=true
    }else if(change==true){
        $('link[href="/css/index_light.css"]').attr('href','/css/index_dark.css');
        change=false
    }

}

export function darkModeShowroom(){
    if(change==false){
        $('link[href="/css/showroom_dark.css"]').attr('href','/css/showroom_light.css');
        change=true
    }else if(change==true){
        $('link[href="/css/showroom_light.css"]').attr('href','/css/showroom_dark.css');
        change=false
    }
}