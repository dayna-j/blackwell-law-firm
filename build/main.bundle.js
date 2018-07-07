'use strict';

document.addEventListener("DOMContentLoaded", function () {

    var sr = ScrollReveal();

    sr.reveal('#splash-dialog', {
        duration: 1500,
        reset: false
    });

    sr.reveal('.button-wrapper', {
        duration: 1500,
        reset: false
    });

    sr.reveal('.features-grid', {
        duration: 650,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        reset: true
    });
});

// #splash-dialog
// .button-wrapper
