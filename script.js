/* ============================================
   UMA PALACE V2.0
   PART 3A
   Slider • Loader • Navbar • Counters
============================================ */

// =======================
// Loader
// =======================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});

// =======================
// Sticky Navbar
// =======================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    }

    else {

        navbar.classList.remove("scrolled");

    }

});

// =======================
// Hero Slider
// =======================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}

setInterval(changeSlide, 5000);

// =======================
// Counter Animation
// =======================

const counters = document.querySelectorAll(".counter");

const speed = 80;

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                const increment = Math.ceil(target / speed);

                count += increment;

                if (count < target) {

                    counter.innerText = count + "+";

                    requestAnimationFrame(update);

                }

                else {

                    counter.innerText = target + "+";

                }

            }

            update();

            observer.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => observer.observe(counter));

// =======================
// Smooth Scroll
// =======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =======================
// Booking Popup
// =======================

function openBooking() {
    document.getElementById("bookingModal").classList.add("show");
}

function closeBooking() {
    document.getElementById("bookingModal").classList.remove("show");
}

window.addEventListener("click", function (event) {

    const modal = document.getElementById("bookingModal");

    if (event.target === modal) {
        closeBooking();
    }

});

/* ============================================
   PART 3B
   Premium Animations
============================================ */

/* ============================
   Scroll Reveal Animation
============================ */

const revealElements = document.querySelectorAll(
".section-heading,.about-grid,.amenity-card,.stat-card,.gallery-grid,.pool-grid,.review"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
if(!entry.target.classList.contains("hero-content")){
    entry.target.style.transform="translateY(0)";
}
}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(80px)";

el.style.transition="all .8s ease";

revealObserver.observe(el);

});


/* ============================
   Back To Top Button
============================ */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ============================
   Scroll Progress Bar
============================ */

const progress=document.createElement("div");

progress.className="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

let totalHeight=document.body.scrollHeight-window.innerHeight;

let progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});


/* ============================
   Mobile Menu
============================ */

const menuBtn=document.querySelector(".menu-btn");

const navLinks=document.querySelector("#navbar ul");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});


/* ============================
   Gallery Lightbox
============================ */

const galleryImages=document.querySelectorAll(".gallery-grid img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

const image=document.createElement("img");

image.src=img.src;

while(lightbox.firstChild){

lightbox.removeChild(lightbox.firstChild);

}

lightbox.appendChild(image);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});


/* ============================
   Hero Parallax
============================ */

window.addEventListener("scroll",()=>{

const hero=document.querySelector("header");

hero.style.backgroundPositionY=window.pageYOffset*.5+"px";

});


/* ============================
   Button Ripple Effect
============================ */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

let ripple=document.createElement("span");

ripple.classList.add("ripple");

this.appendChild(ripple);

let x=e.clientX-e.target.offsetLeft;

let y=e.clientY-e.target.offsetTop;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ==============================
Scroll To Top
============================== */

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollTopBtn.style.opacity="1";

scrollTopBtn.style.pointerEvents="auto";

}else{

scrollTopBtn.style.opacity="0";

scrollTopBtn.style.pointerEvents="none";

}

});

scrollTopBtn.addEventListener("click",(e)=>{

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});