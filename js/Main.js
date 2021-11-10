// open List Icon Setting
let Icon = document.querySelector(".setting .setting-icon");
let IconSpin = document.querySelector(".setting .setting-icon i");
let setting = document.querySelector(".setting");
Icon.onclick = function() {
    setting.classList.toggle('open');
    IconSpin.classList.toggle('fa-spin');
}

// Local Storage Setting Color 
let localStorageColor = window.localStorage.getItem('color-option');
if (localStorageColor !== null) {

    //Check if Local Storage getItems
    document.documentElement.style.setProperty('--main-color', localStorageColor);

    //Remove All Active Class With Lis
    document.querySelectorAll(".setting li").forEach((el) => {
        el.classList.remove('active');

        // Add Active Class on Element with Data color === Local Storage item
        if (el.dataset.color === localStorageColor) {
            //Add Active Class
            el.classList.add('active');
        }
    })
}

// Setting Color
let colorLis = document.querySelectorAll(".setting li");
colorLis.forEach((li) => {
    li.addEventListener('click', function(e) {
        //Looping From Li
        colorLis.forEach(li => {
                li.classList.remove('active');
                e.currentTarget.classList.add('active');
            })
            // change Color Main-color
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        window.localStorage.setItem('color-option', e.target.dataset.color);
    });
});


// Var Random Background
let backgroundOption = true;
var BackgroundPage;

let RandomBackgrounds = document.querySelectorAll(".setting .option-box span");
//Local Storage Random Backgrounds
let backgroundLocalItem = localStorage.getItem("background-option");
//Check if get items with local Storage
if (backgroundLocalItem !== null) {
    // Remove All Active
    RandomBackgrounds.forEach(span => {
        span.classList.remove();
        console.log(span);
    });

    if (backgroundLocalItem === 'true') {

        backgroundOption = true;
        document.querySelector('.setting .option-box .yes').classList.add('active');



    } else {

        backgroundOption = false;
        document.querySelector('.setting .option-box .no').classList.add('active');

    }
}



// Random Backgrounds
//Looping All Span
RandomBackgrounds.forEach((span) => {
    span.addEventListener('click', function(e) {
        RandomBackgrounds.forEach((span) => {
                span.classList.remove('active');
                this.classList.add('active');
            })
            //Add Class Active on self
        if (e.target.dataset.background === "yes") {
            backgroundOption = true;
            RandomizaImg()
            localStorage.setItem("background-option", true);
        } else {
            backgroundOption = false;
            clearInterval(BackgroundPage);
            localStorage.setItem("background-option", false);
        }
    });
});


// Change Background image
function RandomizaImg() {
    if (backgroundOption === true) {
        BackgroundPage = setInterval(() => {
            let imgsPage = document.querySelector(".Header");
            // Array All imgs
            let ArrayImg = ["01.jpg", "02.jpg", "03.jpg"];
            // Create Number Random
            let RandomNumber = Math.floor(Math.random() * ArrayImg.length);
            //Change Background Image
            imgsPage.style.backgroundImage = 'url("imgs/' + ArrayImg[RandomNumber] + '")';
        }, 3000);
    }
}
RandomizaImg()




// Create Anmation Skills Our
let Skills = document.querySelector('.Skills');
window.onscroll = function() {
    // offset Top
    let SkillOffsetTop = Skills.offsetTop;

    // offset Height
    let SkillOffsetHeight = Skills.offsetHeight;

    //Window  Height
    let WindowHeight = this.innerHeight;

    // Window Top Scroll
    let WindowScrollTop = this.pageYOffset

    //Check if WindowScrollTop > (SkillOffsetTop + SkillOffsetHeight - WindowPageYOffset)

    if (WindowScrollTop > (SkillOffsetTop + SkillOffsetHeight - WindowHeight)) {
        let spanProgress = document.querySelectorAll(".skill-box .skill-progress span");
        spanProgress.forEach((span) => {
            span.style.width = span.dataset.progress;
        });

    }


    // Create Header Top Fixed
    let Navbar = document.querySelector('Header .Navbar');

    this.scrollY >= 600 ? Navbar.classList.add('Show') : Navbar.classList.remove('Show');
}



//Create Popup To All image
let myImage = document.querySelectorAll(".Gallary img");
//Looping From All imgs
myImage.forEach(img => {
    img.addEventListener('click', (e) => {

        //Create Popup overlay
        let popupOverLay = document.createElement('div');
        // Add Class With Div overlay
        popupOverLay.className = 'popup-overlay';
        //Add Div with Append Body


        //Create popup img
        let popupImage = document.createElement('div');
        popupImage.className = 'popup-image'

        if (img.alt !== null) {
            // Create Element 
            let Alt = document.createElement('h3');
            let AltText = document.createTextNode(img.alt);
            //Append alt text With element
            Alt.appendChild(AltText);
            // Append Element with Popup box
            popupImage.appendChild(Alt);
        }

        // Create img with Popup img
        let popimg = document.createElement('img');
        popimg.src = img.src;

        popupImage.appendChild(popimg);
        // AppendChlid img with div popup
        popupOverLay.appendChild(popupImage);
        // appendChild Div the body
        document.body.appendChild(popupOverLay);

        //Create Span Close Popup
        let spanPop = document.createElement('span');

        //Add Class to span Close 
        spanPop.className = 'Close-pop'

        // AppendChild Span to Popup box
        spanPop.appendChild(document.createTextNode('X'));
        popupImage.appendChild(spanPop);

    });
});


// Create Funtion Close popup
document.addEventListener('click', (e) => {
    if (e.target.className == 'Close-pop') {
        //Remove Class Element
        e.target.parentElement.remove();

        // Remove Class overLay
        document.querySelector('.popup-overlay').remove();
    }
});



// Bullets
let Bullets = document.querySelectorAll('.nav-Bullets .Bullet');
let navBull = document.querySelectorAll('.List li');

function ScrollToview(element) {
    element.forEach(ele => {
        ele.addEventListener('click', (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'
            });
        });
    });
}

ScrollToview(Bullets);
ScrollToview(navBull);




// Setting Bullet Display
let BulletBox = document.querySelectorAll('.Bullet-box span');
let BulletContainer = document.querySelector('.nav-Bullets');

// Check with local Storage Form Bullet

let BulletLocalStorage = localStorage.getItem('Bullet-option');

if (BulletLocalStorage !== null) {

    BulletBox.forEach(span => {
        span.classList.remove('active');

    });

    //Check with Local Storage
    if (BulletLocalStorage === 'block') {

        BulletContainer.style.display = 'block';
        document.querySelector('.Bullet-box .yes').classList.add('active');
    } else {

        BulletContainer.style.display = 'none';
        document.querySelector('.Bullet-box .no').classList.add('active');
    }
}


BulletBox.forEach((bullet) => {
    bullet.addEventListener('click', (e) => {
        BulletBox.forEach((bullet) => {
            //remove Class Active
            bullet.classList.remove("active");

        });
        //Add Class active
        e.target.classList.add('active');

        // check with Dataset Display
        if (bullet.dataset.display === 'show') {

            BulletContainer.style.display = 'block';
            window.localStorage.setItem('Bullet-option', 'block');

        } else {
            BulletContainer.style.display = 'none';
            window.localStorage.setItem('Bullet-option', 'hide');
        }

    });

});

document.querySelector('.Reset').onclick = function() {
    localStorage.clear();

    // localStorage.removeItem('color-option');
    // localStorage.removeItem('background-option');
    // localStorage.removeItem('Bullet-option');

    // Reload Window
    window.location.reload();
}


// Check with Form
let Allinput = document.querySelectorAll('.contact-us form input:not([type= submit])');
let TextArea = document.querySelector('.contact-us textarea');
let Btn = document.querySelector('.contact-us [type= submit]');


Allinput.forEach(input => {
    Btn.addEventListener('click', (e) => {

        if (input.value !== '' && TextArea.value !== '') {

            console.log(input.value);
            console.log(TextArea.value);

        } else {

            e.preventDefault();
        }

    });
});


// Create Menu Navbar
let btnMenu = document.querySelector('.Toggle');
let navMenu = document.querySelector('.Header .List');


let CloseMenu = document.createElement('span');
CloseMenu.className = 'close-menu';

CloseMenu.appendChild(document.createTextNode('X'));
navMenu.prepend(CloseMenu);

// Add Class Open To open menu
btnMenu.onclick = function(e) {
    // stop Propagation
    e.stopPropagation();

    // Add class active-menu Before
    this.classList.toggle('active-menu');
    navMenu.classList.toggle('open');

}

//Remove Class open to Close menu
CloseMenu.addEventListener('click', () => {
    //Remove Class open
    navMenu.classList.remove('open');
    // Remove class active-menu Before
    btnMenu.classList.remove('active-menu');
});


document.addEventListener('click', (event) => {

    if (event.target !== btnMenu && event.target !== navMenu) {
        if (navMenu.classList.contains('open')) {

            btnMenu.classList.toggle('active-menu');
            navMenu.classList.toggle('open');
        }
    }
});

// stop Propagation
navMenu.onclick = function(ev) {
    ev.stopPropagation();
}

// Remove Class open From key
document.onkeyup = function(ev) {
    if (ev.key === "Escape") {
        navMenu.classList.remove('open');
        btnMenu.classList.remove('active-menu');

    }
}