console.dir(document);






var compteur=document.getElementById('chronotime');


                  


function timer(){
    var chrono = setInterval(tmin(),60000);
}




var min = document.getElementById('minutes').value;

function tmin(){
    if (min > 0) {
        min--;
    }
    if (min == 0) {
        var fin = setInterval(alert("Fin du break"),60000);
    }
}
chronotime.innerHTML= min +':';