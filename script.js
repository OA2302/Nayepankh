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
    document.getElementById("auto").innerHTML = `  
    <img src="assets/IMG-20231025-WA0033.jpg" alt="images">
    <h1>Think global,<br> Act local.</h1> 
    <p>"NayePankh Foundation" is a non governmental organisation with a strong desire to help the society and make it a better place for all, by doing everything in our power and to make our vision successful we would require your vital support. Service to mankind is the service to god. Let’s revolutionise the society together!.</p>
    <a href="/about.html" class="btn"><button>Learn More</button></a>
    <a href="/certificate.html" class="btn"><button>Certificate</button></a>
    `;
  }
  function showOrder() {
    document.getElementById("auto").innerHTML =`
    <img src="assets/IMG-20231025-WA0038.jpg" alt="images">
    <h1> Welcome to <br>NayePankh Foundation</h1>
    <h2>We are one of the Biggest Student led NGO of India with its operations extended in the city of Kanpur, Ghaziabad and various other cities.</h2>
     <p>The school began as a summer coaching centre with few students the performance of students in the summer coaching was overwhelming. This encourage us and the Reufort College was born. The school has become the best in a academics and Co Curriculum activities in the neighborhood, the only private school that gives scholarship award to the indigenes and best students of the school. It corporate social responsibilities also extended to ensuring road leading to the community is accessible to all road user during the raining season.</p>`
     ;
  }
  function showToken() {
    document.getElementById("auto").innerHTML = `
    <p>JOIN OUR</p>
    <h1> TEAM</h1> 
    <p>"Join our team and make a difference in the lives of those in need. At NayePankh Foundation, we are committed to creating positive change and empowering communities. By joining our team, you will have the opportunity to contribute your time, skills, and ideas to help make a real impact. Whether you are passionate about education, health, or providing support during times of crisis, there is a place for you on our team. Join us today and be a part of an organization that is making a difference, one person at a time."</p>
    <a href="/join.html"><button>JOIN US</button></a>
    `
  }
  function showAbout() {
    document.getElementById("change").innerHTML =`
    <div class="about">
            <h2>Who We Are</h2>
            <h1 class="h1" >About Us</h1>
            <div class="flx">
             <div>
             <h1>How it started?</h1><br>
             <p>As we all know, 2020 was a year the world was striving to survive the global pandemic of covid-19. During these dire times we felt an urge to make an impact with whatever we had, and so we tried!! We tried to uplift the underprivileged and help the needy with all our resources and material we could arrange, it was tough but we didn't lose our hope and kept going in order to bring a change everyone was expecting the bigger authorities to bring in the societies on smaller levels. We started off as a group of bunch of highschoolers but now are a team of numerous people from different parts of the city and state! 28th March 2021, the day we officially landed on the ground to serve our duties as the youth of the most rapidly progressing nation afterall, the main hope of a nation lies in the arms of its youth.</p>
</div>
            <img src="assets/IMG-20231025-WA0053.jpg" alt="">
            </div>
            <div class="what">
                <h1>What is NayePankh?</h1>
                <p>Nayepankh foundation was initiated to bring a change and help people during the tough times of Covid. Later in the year, the NGO started to expand their operations and provide help to a wider section of the society. With this revamped vision, the NGO acquired the name of NayePankh – giving wings to uplift the underprivileged section of our society. NayePankh is one of the eminent NGOs espoused in providing food, sanitary napkins, clothes, educating underprivileged sectors of our society for the better future. We make efforts to solve daily problems faced by people of India. Most of the young women feel humiliating in public places during their menstrual cycle; to bring change we create awareness campaigns among woman and youths about personal hygiene, providing sanitary napkins. Also, in our endeavour to fight hunger we distribute food not only to the underprivileged community but also to the stray animals. We are also providing clothes to the poor families. Till date we have helped more than two lakhs of people. Although this seems quite a big achievement, but our goal is still not complete, therefore we’re continuing more with hustle. When lockdown was hitting hard, we took a decision and now we are a 12A and 80G certified NGO (that means if someone donates to NayePankh they will get a relief of 50%in income tax). The most striking feature about us is that we are completely led by the youths of our country, many of whom are still in their colleges and schools. We are on a mission to make this earth a better place to live for all creatures. We are here as 'BADALTE BHARAT KI NAYI TASVEER'!!</p>
            </div>
          </div>
    `
  }
  function showCertificate() {
    document.getElementById("change").innerHTML =`
    <div class="certify">
            <img src="assets/1.webp" alt="Certificate1">
            <img src="assets/2.webp" alt="Certificate2"> <br>
            <img src="assets/3.webp" alt="certificate3" style="margin-left: 200px;">
        </div>
    `
  }
  function showNews() {
    document.getElementById("change").innerHTML =`
    <div class="news">
            <img src="assets/4.webp" alt="Certificate1">
    </div>
            `
  }