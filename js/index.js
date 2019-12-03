const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaTextH = document.querySelector(".cta-text h1");
ctaTextH.textContent= siteContent["cta"]["h1"] ;

const ctaTextB = document.querySelector(".cta-text button");
ctaTextB.textContent= siteContent["cta"]["button"] ;

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"][ "img-src"] )

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Doing some one by one
const textCont= document.querySelectorAll(".text-content");

textCont[0].children[0].textContent=siteContent["main-content"]["features-h4"]
textCont[0].children[1].textContent=siteContent["main-content"]["features-content"]
textCont[1].children[0].textContent=siteContent["main-content"]["about-h4"]
textCont[1].children[1].textContent=siteContent["main-content"]["about-content"]
textCont[2].children[0].textContent=siteContent["main-content"]["services-h4"]
textCont[2].children[1].textContent=siteContent["main-content"]["services-content"]
textCont[3].children[0].textContent=siteContent["main-content"]["product-h4"]
textCont[3].children[1].textContent=siteContent["main-content"]["product-content"]
textCont[4].children[0].textContent=siteContent["main-content"]["vision-h4"]
textCont[4].children[1].textContent=siteContent["main-content"]["vision-content"]


const navbar = document.querySelectorAll("nav a");
var count = 0;
for (let item in siteContent["nav"]){
  if (item != "img-src"){
    navbar[count].textContent=siteContent["nav"][item];
    navbar[count].style.color ='green';
    count++;
  }
}
const navbarParent =document.querySelector ("nav");
const itemOne = document.createElement("a");
const itemTwo = document.createElement("a");
itemOne.textContent= "First Item";
itemTwo.textContent="Last Item";
navbarParent.prepend(itemOne);
navbarParent.appendChild(itemTwo);


//I need to figure out how to do this in a bit
//navbar.forEach(element => {element.siteContent["nav"]["nav-item-1"];}
const contact = document.querySelectorAll(".contact *");
var count = 0;
for (let item in siteContent["contact"]){
    contact[count].textContent=siteContent["contact"][item];
    count++;
}

const footer = document.querySelector("footer p");
footer.textContent=siteContent["footer"]["copyright"];