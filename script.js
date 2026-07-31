// ===============================

// Loader Animation

// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = "1s";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },2500);

});

// ===============================

// Floating Hearts

// ===============================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.classList.add("heart");

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (15+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,350);

// ===============================

// Music

// ===============================

const music = new Audio("assets/music/lover.mp3");

music.loop = true;

const musicBtn = document.getElementById("musicToggle");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML="⏸️";

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵";

    }

    playing=!playing;

});

// ===============================

// Gallery Lightbox

// ===============================

const images = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

images.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        const img=document.createElement("img");

        img.src=image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

// ===============================

// Scroll Animation

// ===============================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("hidden");

    observer.observe(sec);

});

// ===============================

// Bubuzilla Surprise

// ===============================

const bubuButton=document.querySelector(".bubu button");

if(bubuButton){

bubuButton.addEventListener("click",()=>{

alert("❤️ No matter what mode you're in... you'll always be my favourite, Haru. 🦖");

});

}

// ===============================

// Secret Message

// ===============================

let clicks=0;

document.body.addEventListener("click",()=>{

clicks++;

if(clicks===25){

alert("🎁 Secret Unlocked!\n\nIf you're reading this...\nI hope you never forget how loved you are.\n\nLove,\nKshiteej ❤️");

}

});

// ===============================

// Console Surprise

// ===============================

console.log("❤️ Happy Girlfriend Day Haru ❤️");
