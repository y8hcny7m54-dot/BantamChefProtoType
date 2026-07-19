/* ==================================
   BANTAM CHEF
   Main JavaScript
================================== */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

});


/* ==========================
   Smooth Scrolling
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================
   Reveal On Scroll
========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


/* ==========================
   Back To Top Button
========================== */

const topButton=document.createElement("button");

topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topButton.className="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>600){

        topButton.classList.add("showTop");

    }

    else{

        topButton.classList.remove("showTop");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================
   Active Navigation
========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.clientHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* ==========================
   Image Hover Effect
========================== */

document.querySelectorAll(".food-card img").forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.08)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});


/* ==========================
   Mobile Navigation
========================== */

const nav=document.querySelector(".nav-links");

const burger=document.createElement("div");

burger.className="hamburger";

burger.innerHTML=`

<span></span>

<span></span>

<span></span>

`;

document.querySelector(".navbar").appendChild(burger);

burger.addEventListener("click",()=>{

    nav.classList.toggle("mobileOpen");

    burger.classList.toggle("open");

});


/* ==========================
   Loading Screen
========================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/* ==========================
   Footer Year
========================== */

const year=document.querySelector("#year");

if(year){

    year.textContent=new Date().getFullYear();

}