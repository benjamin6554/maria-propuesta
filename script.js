let mensajeMostrado = false;

$(document).ready(function(){

    $(".p1").click(function(){

        if(!mensajeMostrado){

            $("#mensajeNo")
                .html("😏 Inténtalo otra vez")
                .fadeIn();

            mensajeMostrado = true;

            $(this).hide();

            setTimeout(()=>{
                $("#mensajeNo").fadeOut();
            },2500);
        }

    });

});

function dijoSi(){

    document.getElementById("opciones").style.display = "none";
    document.getElementById("mensajeNo").style.display = "none";

    document.getElementById("chat").style.display = "block";
    document.getElementById("final").style.display = "block";

    confetti({
        particleCount: 200,
        spread: 120
    });

    setTimeout(()=>{
        document.getElementById("ai").innerHTML =
        "Yo también te amo ❤️";
    },1500);

}

function finalLove(){

    document.getElementById("loveExplosion").style.display = "flex";

    setInterval(()=>{
        confetti({
            particleCount:30,
            spread:80
        });
    },300);

    const msg = new SpeechSynthesisUtterance(
        "Te amo para siempre María"
    );

    msg.lang = "es-ES";
    speechSynthesis.speak(msg);

}
