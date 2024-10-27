
function sound(note,element) {

    //store data in audio
    var audio = new Audio('soundkit/' + note + '.wav');
    audio.currentTime = 0;  // Reset to start
    audio.play();           // Play the sound

    playani(element);
}

function playani(element) {
    element.classList.add ('active');
    setTimeout(function(){
        element.classList.remove ('active');
    },100);
    }
    

document.getElementById("snare").addEventListener("click", function() {
    sound('snare',this); 
});
document.getElementById("kick1").addEventListener("click", function() {
    sound('kick',this); 
});
document.getElementById("kick2").addEventListener("click", function() {
    sound('kick',this); 
});

document.getElementById("hi-tom").addEventListener("click", function() {
    sound('hi-tom',this); 
});

document.getElementById("mid-tom").addEventListener("click", function() {
    sound('mid-tom',this); 
});
document.getElementById("low-tom").addEventListener("click", function() {
    sound('low-tom',this); 
});

document.getElementById("close").addEventListener("click", function() {
    sound('close',this); 
});
document.getElementById("open").addEventListener("click", function() {
    sound('open',this); 
});
document.getElementById("crash1").addEventListener("click", function() {
    sound('crash',this); 
});
document.getElementById("crash2").addEventListener("click", function() {
    sound('crash-bro',this); 
});
document.getElementById("ride").addEventListener("click", function() {
    sound('ride',this); 
});
document.getElementById("floor").addEventListener("click", function() {
    sound('floor',this); 
});








// If a key is press
document.addEventListener("keydown", function(event) {
    if (event.key === 'j' || event.key === 'J') {  
        sound('kick', document.getElementById("kick1"));
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === 'h' || event.key === 'H') {  
        sound('snare', document.getElementById("snare"));
    }
    
});
document.addEventListener("keydown", function(event) {
    if (event.key === 'k' || event.key === 'k') {  
        sound('kick',document.getElementById("kick2")); 
    }
});


document.addEventListener("keydown", function(event) {
    if (event.key === 'g' || event.key === 'G') {  
        sound('hi-tom',document.getElementById("hi-tom")); 
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === 'f' || event.key === 'F') {  
        sound('mid-tom',document.getElementById("mid-tom")); 
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === 'd' || event.key === 'D') {  
        sound('low-tom',document.getElementById("low-tom")); 
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === 'e' || event.key === 'E') {  
        sound('close',document.getElementById("close")); 
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === 'w' || event.key === 'W') {  
        sound('open',document.getElementById("open")); 
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === 'r' || event.key === 'R') {  
        sound('crash',document.getElementById("crash1")); 
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === 't' || event.key === 'T') {  
        sound('crash-bro',document.getElementById("crash2")); 
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === 'y' || event.key === 'Y') {  
        sound('ride',document.getElementById("ride")); 
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === 'u' || event.key === 'U') {  
        sound('floor',document.getElementById("floor")); 
    }
});











