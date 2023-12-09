function openmenu() {

    gsap.fromTo("#m-menu", {
        display: 'none',
        left: -410, //normal value

    }, {
        display: 'block',
        left: 0,

        duration: 1
    });
    gsap.fromTo("#closeMobileMenu", {
        display: 'none'
    }, {
        display: 'block',
    });
}

function closemenu() {
    gsap.fromTo("#m-menu", {
        display: 'block',
        left: 0, //normal value

    }, {
        display: 'none',
        left: -410,

        duration: 1
    });
    gsap.fromTo("#closeMobileMenu", {
        display: 'block'
    }, {
        display: 'none',
    });
}
