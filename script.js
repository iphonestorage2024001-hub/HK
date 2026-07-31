/* ==========================================

   Happy Girlfriend Day ❤️

   Script Part 1

========================================== */

// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = "1.2s";

        setTimeout(() => {

            loader.style.display = "none";

        },1200);

    },2200);

});

/* ==========================================

Music

========================================== */

const musicBtn = document.getElementById("musicToggle");

const music = new Audio("assets/music/Taylor_Swift_-_Lover_(mp3.pm).mp3");

music.loop = true;

let isPlaying = false;

musicBtn.addEventListener("click",()=>{

    if(!isPlaying){

        music.play();

        musicBtn.innerHTML="⏸";

        musicBtn.style.transform="rotate(360deg)";

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵";

        musicBtn.style.transform="rotate(0deg)";

    }

    isPlaying=!isPlaying;

});

/* ==========================================

Floating Hearts

========================================== */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,400);

/* ==========================================

Gallery Lightbox

========================================== */

const gallery=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

gallery.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightbox.innerHTML=`<img src="${img.src}">`;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

/* ==========================================

Scroll Animation

========================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});

/* ==========================================

   HERO SLIDESHOW

========================================== */

const hero = document.querySelector(".hero");

const heroImages = [

"assets/images/img1.jpg",

"assets/images/img2.jpg",

"assets/images/img3.jpg",

"assets/images/img4.jpg",

"assets/images/img5.jpg",

"assets/images/img6.jpg",

"assets/images/img7.jpg",

"assets/images/img8.jpg"

];

let currentHero = 0;

setInterval(()=>{

currentHero++;

if(currentHero>=heroImages.length){

currentHero=0;

}

hero.style.backgroundImage=`

linear-gradient(

rgba(7,17,31,.65),

rgba(7,17,31,.80)

),

url('${heroImages[currentHero]}')

`;

hero.style.transition="1.5s ease";

},5000);

/* ==========================================

   BUBUZILLA SYSTEM

========================================== */

const terminal = document.querySelector(".terminal");

if(terminal){

const lines=[

"Scanning Haru...",

"Smile Detected ✔",

"Kindness Detected ✔",

"Cuteness Level 1000 ✔",

"Taylor Swift Fan ✔",

"Bubuzilla Mode Loading...",

"❤️ Status : My Favourite Person"

];

terminal.innerHTML="";

let i=0;

function typeLine(){

if(i<lines.length){

const p=document.createElement("p");

p.textContent=lines[i];

terminal.appendChild(p);

i++;

setTimeout(typeLine,600);

}

}

setTimeout(typeLine,1200);

}

/* ==========================================

   TYPEWRITER LETTER

========================================== */

const letter=document.querySelector(".letter");

if(letter){

const original=letter.innerHTML;

letter.innerHTML="";

let index=0;

function type(){

if(index<original.length){

letter.innerHTML+=original.charAt(index);

index++;

setTimeout(type,8);

}

}

const letterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

type();

letterObserver.disconnect();

}

});

});

letterObserver.observe(letter);

}

/* ==========================================

   SECRET HEART

========================================== */

let secret=0;

document.body.addEventListener("dblclick",()=>{

secret++;

if(secret===5){

alert("❤️ Secret Unlocked ❤️\n\nDear Haru,\n\nIf you're reading this...\nI hope you always remember that you are deeply loved.\n\nLove,\nKshiteej");

secret=0;

}

});

/* ==========================================

   ENDING CONFETTI

========================================== */

const ending=document.querySelector(".end");

const endingObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

for(let i=0;i<120;i++){

const confetti=document.createElement("div");

confetti.innerHTML=["❤️","🌸","✨","💖"][Math.floor(Math.random()*4)];

confetti.style.position="fixed";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.fontSize=(18+Math.random()*20)+"px";

confetti.style.pointerEvents="none";

confetti.style.zIndex="9999";

confetti.style.transition="5s linear";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform="translateY(120vh) rotate(720deg)";

confetti.style.opacity="0";

},50);

setTimeout(()=>{

confetti.remove();

},5200);

}

}

});

},{threshold:.8});

endingObserver.observe(ending);
