function setCookie(cname, cvalue, exdays) { 
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000)); 
    let expires = 'expires='+d.toUTCString();
    let cookie = cname + '=' + cvalue.toString() + ';' + expires + ';path=/';
    document.cookie = cookie;
}

function getCookie(cname) { 

    let name = cname + "=";
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) { 
    
        var c = ca[i];

        while (c.charAt(0) == ' ') { 
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}   

function deleteCookie(cname) {
    document.cookie = cname+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}
