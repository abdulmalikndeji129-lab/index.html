// ==========================================
// PREMIUM GIRLFRIEND'S DAY WEBSITE
// Created for Abdulmalik ❤️
// ==========================================

// ---------------- PASSWORD ----------------

const PASSWORD = "147265";

const passwordScreen = document.getElementById("password-screen");
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

passwordScreen.style.opacity="0";

setTimeout(()=>{

passwordScreen.style.display="none";

loadingScreen.style.display="flex";

setTimeout(()=>{

loadingScreen.style.display="none";

website.style.display="block";

document.body.style.overflowY="auto";

const music=document.getElementById("bgMusic");

music.play().catch(()=>{

console.log("Music blocked until user interacts.");

});

AOS.init({

duration:1200,
once:true

});

},2500);

},600);

}

else{

error.innerHTML="❤️ Wrong password. Try again.";

error.animate([

{transform:"translateX(-8px)"},

{transform:"translateX(8px)"},

{transform:"translateX(-8px)"},

{transform:"translateX(0)"}

],{

duration:300

});

}

}

// ---------------- START JOURNEY ----------------

document

.getElementById("startJourney")

.addEventListener("click",()=>{

document

.querySelector(".counter-section")

.scrollIntoView({

behavior:"smooth"

});

});

// ---------------- RELATIONSHIP COUNTER ----------------

const startDate = new Date("March 18, 2023 00:00:00");

function updateCounter(){

const now=new Date();

let diff=now-startDate;

let seconds=Math.floor(diff/1000);

let years=Math.floor(seconds/(365.25*24*60*60));

seconds-=years*365.25*24*60*60;

let months=Math.floor(seconds/(30.44*24*60*60));

seconds-=months*30.44*24*60*60;

let days=Math.floor(seconds/(24*60*60));

seconds-=days*24*60*60;

let hours=Math.floor(seconds/3600);

seconds-=hours*3600;

let minutes=Math.floor(seconds/60);

seconds-=minutes*60;

document.getElementById("years").innerHTML=years;
document.getElementById("months").innerHTML=months;
document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=Math.floor(seconds);

}

updateCounter();

setInterval(updateCounter,1000);

// ---------------- MUSIC ----------------

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicToggle");

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="🎵";

}

else{

music.pause();

musicBtn.innerHTML="🔇";

}

});
// ==========================================
// GALLERY LIGHTBOX
// ==========================================

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", function(e){

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

// ==========================================
// LOVE LETTER
// ==========================================

const surpriseBtn=document.getElementById("surpriseBtn");

const letter=document.getElementById("letter");

const letterText=document.getElementById("letterText");

const originalText=letterText.innerHTML;

letter.style.display="none";

letterText.innerHTML="";

surpriseBtn.addEventListener("click",()=>{

letter.style.display="block";

letter.scrollIntoView({

behavior:"smooth"

});

letterText.innerHTML="";

let i=0;

function type(){

if(i<originalText.length){

letterText.innerHTML+=originalText.charAt(i);

i++;

setTimeout(type,28);

}

}

type();

});

// ==========================================
// CONFETTI
// ==========================================

document.getElementById("playConfetti").addEventListener("click",()=>{

confetti({

particleCount:250,

spread:150,

origin:{y:0.6}

});

});

// ==========================================
// SCROLL REVEAL
// ==========================================

const sections=document.querySelectorAll("section");

function revealSections(){

sections.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-100){

section.classList.add("show");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();

// ==========================================
// MUSIC AUTOPLAY FALLBACK
// ==========================================

document.body.addEventListener("click",()=>{

const music=document.getElementById("bgMusic");

if(music.paused){

music.play().catch(()=>{});

}

},{once:true});

// ==========================================
// FLOATING HEARTS
// ==========================================

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-50px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.opacity="0.8";

heart.style.transition="transform 8s linear, opacity 8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},8000);

},2500);

// ==========================================
// PAGE READY
// ==========================================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});
