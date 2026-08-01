// ==========================================
// PASSWORD
// ==========================================

const PASSWORD = "147265";

const passwordScreen = document.getElementById("147265");
const loadingScreen = document.getElementById("loading-screen");
const website = document.getElementById("website");

const input = document.getElementById("password-input");
const unlockBtn = document.getElementById("unlock-btn");
const error = document.getElementById("error-message");

website.style.display = "none";
loadingScreen.style.display = "none";

unlockBtn.addEventListener("click", unlockWebsite);

input.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        unlockWebsite();

    }

});

function unlockWebsite(){

    if(input.value===PASSWORD){

        passwordScreen.style.display="none";

        loadingScreen.style.display="flex";

        setTimeout(function(){

            loadingScreen.style.display="none";

            website.style.display="block";

            const music = document.getElementById("bgMusic");

music.play().catch(() => {
    console.log("Waiting for user interaction.");
});

        },3000);

    }

    else{

        error.innerHTML="❤️ Wrong password. Try again.";

        error.style.color="#ff5c5c";

    }

}

// ==========================================
// START JOURNEY BUTTON
// ==========================================

document
.getElementById("startJourney")
.addEventListener("click",function(){

document.querySelector(".journey")
.scrollIntoView({

behavior:"smooth"

});

});

// ==========================================
// SURPRISE BUTTON
// ==========================================

document
.getElementById("surpriseBtn")
.addEventListener("click",function(){

const letter=document.getElementById("letter");

letter.style.display="block";

letter.scrollIntoView({

behavior:"smooth"

});

});

// ==========================================
// RELATIONSHIP TIMER
// ==========================================

const startDate = new Date("March 18, 2023 00:00:00");

function updateCounter(){

const now = new Date();

let difference = now - startDate;

let seconds = Math.floor(difference/1000);

let years = Math.floor(seconds/(365.25*24*60*60));

seconds -= years*365.25*24*60*60;

let months = Math.floor(seconds/(30.44*24*60*60));

seconds -= months*30.44*24*60*60;

let days = Math.floor(seconds/(24*60*60));

seconds -= days*24*60*60;

let hours = Math.floor(seconds/3600);

seconds -= hours*3600;

let minutes = Math.floor(seconds/60);

seconds -= minutes*60;

document.getElementById("years").innerHTML=years;

document.getElementById("months").innerHTML=months;

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=Math.floor(seconds);

}

setInterval(updateCounter,1000);

updateCounter();
// ==========================================
// IMAGE LIGHTBOX
// ==========================================

const images = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `<img id="lightbox-img">`;

document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});


// ==========================================
// TYPEWRITER EFFECT
// ==========================================

const letter = document.querySelector("#letter p");

const originalText = letter.innerHTML;

letter.innerHTML="";

let i=0;

function typeWriter(){

if(i<originalText.length){

letter.innerHTML+=originalText.charAt(i);

i++;

setTimeout(typeWriter,35);

}

}

document
.getElementById("surpriseBtn")
.addEventListener("click",()=>{

letter.innerHTML="";

i=0;

typeWriter();

});


// ==========================================
// SCROLL REVEAL
// ==========================================

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-120){

sec.classList.add("show");

}

});

});
// =======================================
// CONFETTI
// =======================================

document.getElementById("surpriseBtn").addEventListener("click", () => {

    confetti({
        particleCount:200,
        spread:120,
        origin:{y:0.6}
    });

});

// =======================================
// AOS
// =======================================

AOS.init({

duration:1200,

once:true

});
