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

// NAVIGATION //
//navigation links from object above
let nav = document.querySelectorAll("nav a")
nav[0].innerHTML = siteContent["nav"]["nav-item-1"]
nav[1].innerHTML = siteContent["nav"]["nav-item-2"]
nav[2].innerHTML = siteContent["nav"]["nav-item-3"]
nav[3].innerHTML = siteContent["nav"]["nav-item-4"]
nav[4].innerHTML = siteContent["nav"]["nav-item-5"]
nav[5].innerHTML = siteContent["nav"]["nav-item-6"]
//console.log(nav)

// TASK 3 //

// change color to green
nav.forEach((anchor) => {
  anchor.style.color = "green"
})

//append item

newNavItem1 = document.createElement('a')
newNavItem1.textContent = "sweet"
navigation = document.querySelector('nav')
navigation.append(newNavItem1)

//prepend item
newNavItem2 = document.createElement('a')
newNavItem2.textContent = "dude"
navigation.prepend(newNavItem2)

//Update the img src for the logo
let logo = document.getElementById("logo-img");
//console.log(logo)
logo.setAttribute('src', siteContent["nav"]["img-src"])


//  C T A  //
//
let callToAction = document.querySelectorAll(".cta-text h1")
console.log(callToAction)
//button in cta
callToAction[0].innerHTML = siteContent["cta"]["h1"]
document.querySelector(".cta-text button").innerHTML = siteContent["cta"]["button"]
document.getElementById("cta-img").setAttribute("src", siteContent["cta"]["img-src"])


// MAIN CONTENT //
//top content
let topContent = document.querySelectorAll(".main-content .top-content .text-content")
topContent[0].childNodes[1].innerHTML = siteContent["main-content"]["features-h4"]
topContent[0].childNodes[3].innerHTML = siteContent["main-content"]["features-content"]
topContent[1].childNodes[1].innerHTML = siteContent["main-content"]["about-h4"]
topContent[1].childNodes[3].innerHTML = siteContent["main-content"]["about-content"]

//middle image
document.getElementById("middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"])

//bottom content
let bContent = document.querySelectorAll(".main-content .bottom-content .text-content")
bContent[0].childNodes[1].innerHTML = siteContent["main-content"]["services-h4"]
bContent[0].childNodes[3].innerHTML = siteContent["main-content"]["services-content"]
bContent[1].childNodes[1].innerHTML = siteContent["main-content"]["product-h4"]
bContent[1].childNodes[3].innerHTML = siteContent["main-content"]["product-content"]
bContent[2].childNodes[1].innerHTML = siteContent["main-content"]["vision-h4"]
bContent[2].childNodes[3].innerHTML = siteContent["main-content"]["vision-content"]


// CONTACT //

let contact = document.querySelectorAll(".contact")

contact[0].childNodes[1].innerHTML = siteContent["contact"]["contact-h4"]
contact[0].childNodes[3].innerHTML = siteContent["contact"]["address"]
contact[0].childNodes[5].innerHTML = siteContent["contact"]["phone"]
contact[0].childNodes[7].innerHTML = siteContent["contact"]["email"]
//footer
let footer = document.querySelector("footer p")
footer.textContent = siteContent.footer.copyright

