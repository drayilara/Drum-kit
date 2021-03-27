//  detecting button press.

var numberOfDrums = document.querySelectorAll(".drum").length;

for( var i=0; i< numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        playAudio(this.innerHTML);

        buttonAnimation(this.innerHTML);
   
    })
}

// detecting keyboard press.

document.addEventListener("keydown", function (event){
    
    playAudio(event.key);

    buttonAnimation(event.key);
    
})

// common function.

function playAudio(tracker){

switch(tracker){
    case "w" : var audio = new Audio("sounds/crash.mp3");
                audio.play();
    break;

    case "a" : var audio2 = new Audio("sounds/kick-bass.mp3");
                audio2.play();
    break;

    case "s" : var audio3 = new Audio("sounds/snare.mp3");
                audio3.play();
    break;  
    
    case "d": var audio4 = new Audio("sounds/tom-1.mp3");
                audio4.play();

    case "j": var audio5 = new Audio ("sounds/tom-2.mp3");
                audio5.play();
    break;

    case "k": var audio6 = new Audio("sounds/tom-3.mp3");
                audio6.play();
    break;

    case "l": var audio7 =new Audio("sounds/tom-4.mp3");
                audio7.play();
    break;

    default: alert("Sorry " + key + " doesn't correspond to a sound");

}
}

// animation code.

function buttonAnimation(activeButton){
     document.querySelector("." + activeButton).classList.add("pressed");

    setTimeout(function(){

        document.querySelector("." + activeButton).classList.remove("pressed");
    }, 100)
}



