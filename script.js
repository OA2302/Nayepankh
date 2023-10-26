"use strict";

const dropdownLinks = document.querySelectorAll(".dropdown");
const menuOpener = document.querySelector("#open");
const menuCloser = document.querySelector("#close");
const mobList = document.querySelector(".mob-list");

[...dropdownLinks].forEach((link) => {
    if (window.innerWidth > 800) {
        link.addEventListener("mouseenter", (e) => {
            const dropdownMenu = e.target.closest(".dropdown").querySelector(".dropdown-content");
            dropdownMenu.classList.add("show");
        });

        link.addEventListener("mouseleave", (e) => {
            const dropdownMenu = e.target.closest(".dropdown").querySelector(".dropdown-content");
            dropdownMenu.classList.remove("show");
        });
    } else {
        link.addEventListener("click", (e) => {
            const dropdownMenu = e.target.closest(".dropdown").querySelector(".dropdown-content");
            dropdownMenu.classList.toggle("show");
        });
    }
});
menuOpener.addEventListener("click", () => {
    mobList.classList.add("show");
    document.body.style.overflow = "hidden";
    menuCloser.classList.add("show");
    menuOpener.classList.remove("show");
});
menuCloser.addEventListener("click", () => {
    mobList.classList.remove("show");
    document.body.style.overflow = "visible";
    menuCloser.classList.remove("show");
    menuOpener.classList.add("show");
});

function showAuto() {
    document.getElementById("auto").innerHTML = `  <h1>Think global,<br> Act local.</h1> 
    <p>"NayePankh Foundation" is a non governmental organisation with a strong desire to help the society and make it a better place for all, by doing everything in our power and to make our vision successful we would require your vital support. Service to mankind is the service to god. Let’s revolutionise the society together!.</p>
    <a href="/about.html" class="btn"><button>Learn More</button></a>
    <a href="/certificate.html" class="btn"><button>Certificate</button></a>
    `;
  }
  function showOrder() {
    document.getElementById("auto").innerHTML =`<h1> Welcome to <br>NayePankh Foundation</h1>
    <h2>We are one of the Biggest Student led NGO of India with its operations extended in the city of Kanpur, Ghaziabad and various other cities.</h2>
     <p>The school began as a summer coaching centre with few students the performance of students in the summer coaching was overwhelming. This encourage us and the Reufort College was born. The school has become the best in a academics and Co Curriculum activities in the neighborhood, the only private school that gives scholarship award to the indigenes and best students of the school. It corporate social responsibilities also extended to ensuring road leading to the community is accessible to all road user during the raining season.</p>`
     ;
  }
  function showToken() {
    document.getElementById("auto").innerHTML = `<p>JOIN OUR</p>
    <h1> TEAM</h1> 
    <p>"Join our team and make a difference in the lives of those in need. At NayePankh Foundation, we are committed to creating positive change and empowering communities. By joining our team, you will have the opportunity to contribute your time, skills, and ideas to help make a real impact. Whether you are passionate about education, health, or providing support during times of crisis, there is a place for you on our team. Join us today and be a part of an organization that is making a difference, one person at a time."</p>
    <a href="/join.html"><button>JOIN US</button></a>
    `
  }
