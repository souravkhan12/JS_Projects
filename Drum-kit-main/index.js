var a = document.querySelectorAll("button").length;
for (var i = 0; i < a; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var innerhtml = this.innerHTML;
        makesound(innerhtml);
        animator(innerhtml);
    })
}

document.addEventListener("keydown", function(event) {
    makesound(event.key);
    animator(event.key);
})

function makesound(al) {
    switch (al) {
        case "w":
            var a = new Audio('sounds/crash.mp3');
            a.play();
            break;
        case "a":
            var a = new Audio('sounds/tom-2.mp3');
            a.play();
            break;
        case "s":
            var a = new Audio('sounds/snare.mp3');
            a.play();
            break;
        case "d":
            var a = new Audio('sounds/tom-1.mp3');
            a.play();
            break;
        case "j":
            var a = new Audio('sounds/tom-2.mp3');
            a.play();
            break;
        case "k":
            var a = new Audio('sounds/tom-3.mp3');
            a.play();
            break;
        case "l":
            var a = new Audio('sounds/tom-4.mp3');
            a.play();
            break;
        default:
    }
}

function animator(al) {
    var activeButton = document.querySelector("." + al);
    activeButton.classList.add("pressed");
    setTimeout(function() { activeButton.classList.remove("pressed") }, 100);
}