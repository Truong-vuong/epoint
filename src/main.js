//////////////////////////////
let prevBanner = document.querySelector('.turn-left');
let nextBanner = document.querySelector('.turn-right');

var slides = document.querySelectorAll(".mgi__banner__box");

var currentSlide = 0;

function goToSlide(n) {
    slides[currentSlide].className = 'mgi__banner__box';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'mgi__banner__box-active mgi__banner__box';
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

nextBanner.onclick = function() {
    nextSlide();
    console.log('aaaaa');
}
prevBanner.onclick = function() {
    prevSlide();
}

// var slideInterval = setInterval(nextSlide, 5000);

//sidebar---------------------------

let openSideIcon = document.querySelector('.mgi__header__icon-right');
let closeSideIcon = document.querySelector('.side-icon');
let sideBar = document.querySelector('.mgi__sidebar');
let headerMain = document.querySelector('.mgi__header');
let mainPage = document.querySelector('.mgi__main');
let wrapper = document.querySelector('.wrapper-class');
let mobileIcon = document.querySelector('.mobile-icon');
let mobileMenu = document.querySelector('.mobile-menu');

mobileIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('pullRight');
    headerMain.classList.toggle('pullRight');
    mainPage.classList.toggle('pullRight');
});

openSideIcon.addEventListener('click', function() {
    sideShow();
    mainPage.style.position = 'fixed';
    mainPage.style.top = '0';
    mainPage.style.left = '0';

    if (!sideBar.classList.contains('active')) {
        mainPage.style.position = 'relative'
    }
})

closeSideIcon.addEventListener('click', function() {
    sideShow();
    if (!sideBar.classList.contains('active')) {
        mainPage.style.position = 'relative'
    }
})

function sideShow() {
    sideBar.classList.toggle('active');
    headerMain.classList.toggle('active');
    mainPage.classList.toggle('active');
};


// header background------------------------------
let header = document.querySelector('.mgi__header');

window.onscroll = function() {
    if (window.pageYOffset >= 1) {
        header.style.backgroundColor = 'rgba(0,0,0,0.9)'
    } else {
        header.style.backgroundColor = 'transparent'
    }
}


//////////////////////////////////////////////////

const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

slider.addEventListener('transitionend', function() {
    if (direction === -1) {
        slider.prepend(slider.lastElementChild);
    } else {
        slider.append(slider.firstElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setInterval(() => {
        slider.style.transition = 'all 0.5s';
    }, 100)
});

prev.addEventListener('click', function() {
    direction = -1;
    slider.style.justifyContent = 'center';
    slider.style.transform = 'translateX(17%)';
});

function nextSlick() {
    if (direction === -1) {
        direction = 1;
    }
    slider.style.transform = 'translateX(-17%)';
};

next.addEventListener('click', nextSlick);
setInterval(function() {
    nextSlick();
}, 8000)


const carousel3 = document.querySelector('.carousel3');
const slider3 = document.querySelector('.slider3');

let direction3;

slider3.addEventListener('transitionend', function() {
    if (direction === -1) {
        slider3.prepend(slider3.lastElementChild);
    } else {
        slider3.append(slider3.firstElementChild);
    }

    slider3.style.transition = 'none';
    slider3.style.transform = 'translate(0)';
    setInterval(() => {
        slider3.style.transition = 'all 0.5s';
    }, 100)
});

function nextSlick3() {
    if (direction === -1) {
        direction = 1;
    }
    slider3.style.transform = 'translateX(-17%)';
};
setInterval(function() {
    nextSlick3();
}, 8000)

const carousel2 = document.querySelector('.carousel2');
const slider2 = document.querySelector('.slider2');

let direction2;

slider2.addEventListener('transitionend', function() {
    if (direction === -1) {
        slider2.prepend(slider2.lastElementChild);
    } else {
        slider2.append(slider2.firstElementChild);
    }

    slider2.style.transition = 'none';
    slider2.style.transform = 'translate(0)';
    setInterval(() => {
        slider2.style.transition = 'all 0.5s';
    }, 100)
});

function nextSlick2() {
    if (direction === -1) {
        direction = 1;
    }
    slider2.style.transform = 'translateX(-17%)';
};
setInterval(function() {
    nextSlick2();
}, 8000)




////////////////


////////animation/////////////
const boxes = document.querySelectorAll('.services__boxes');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerBottom = window.innerHeight / 3 * 4;
    console.log(window.innerHeight);
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().bottom;
        console.log(boxTop);

        if (boxTop < triggerBottom) {
            box.classList.add('bottomToTop');
        } else {
            box.classList.remove('bottomToTop');
        }
    });
}
checkBoxes();