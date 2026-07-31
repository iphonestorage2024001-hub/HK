/* ==========================================

   Happy Girlfriend Day ❤️

   Version 2.0

========================================== */

/* ==========================================

   ELEMENTS

========================================== */

const loader = document.getElementById("loader");

const musicBtn = document.getElementById("musicToggle");

const hero = document.querySelector(".hero");

const galleryContainer = document.getElementById("galleryContainer");

/* ==========================================

   MUSIC

========================================== */

const music = new Audio("assets/music/Taylor_Swift_-_Lover_(mp3.pm).mp3");

music.loop = true;

let opened = false;

/* ==========================================

   GITHUB SETTINGS

========================================== */

const owner = "iphonestorage2024001-hub";

const repo = "HK";

const folder = "assets/images";

const api =

`https://api.github.com/repos/${owner}/${repo}/contents/${folder}`;

let allImages = [];

/* ==========================================

   OPEN LETTER

========================================== */

function openLetter(){

    if(opened) return;

    opened = true;

    music.play().catch(()=>{});

    musicBtn.innerHTML = "⏸";

    loader.style.opacity = "0";

    setTimeout(()=>{

        loader.style.display = "none";

    },1000);

}

loader.addEventListener("click",openLetter);

loader.addEventListener("touchstart",openLetter);

/* ==========================================

   MUSIC BUTTON

========================================== */

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="⏸";

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵";

    }

});

/* ==========================================

   FLOATING HEARTS

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

setInterval(createHeart,500);

/* ==========================================

   LOAD IMAGES FROM GITHUB

========================================== */

async function loadImages(){

    try{

        const response = await fetch(api);

        const files = await response.json();

        allImages = files.filter(file=>{

            return(

                file.type==="file" &&

                (

                    file.name.endsWith(".jpg") ||

                    file.name.endsWith(".jpeg") ||

                    file.name.endsWith(".png") ||

                    file.name.endsWith(".webp")

                )

            );

        });

        console.log(allImages);

    }

    catch(error){

        console.log(error);

    }

}

loadImages();

/* ==========================================

   LIGHTBOX

========================================== */

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

/* ==========================================

   BUILD GALLERY

========================================== */

function buildGallery(){

    galleryContainer.innerHTML="";

    allImages.forEach(file=>{

        const img=document.createElement("img");

        img.src=file.download_url;

        img.alt=file.name;

        img.loading="lazy";

        img.addEventListener("click",()=>{

            lightbox.classList.add("active");

            lightbox.innerHTML=`<img src="${file.download_url}">`;

        });

        galleryContainer.appendChild(img);

    });

}

/* ==========================================

   HERO SLIDESHOW

========================================== */

let heroIndex=0;

function startHero(){

    if(allImages.length===0) return;

    hero.style.backgroundImage=`

    linear-gradient(

    rgba(7,17,31,.55),

    rgba(7,17,31,.75)

    ),

    url('${allImages[0].download_url}')

    `;

    setInterval(()=>{

        heroIndex++;

        if(heroIndex>=allImages.length){

            heroIndex=0;

        }

        hero.style.backgroundImage=`

        linear-gradient(

        rgba(7,17,31,.55),

        rgba(7,17,31,.75)

        ),

        url('${allImages[heroIndex].download_url}')

        `;

        hero.style.transition="1.4s ease";

    },5000);

}
