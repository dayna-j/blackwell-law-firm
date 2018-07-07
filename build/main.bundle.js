'use strict';

document.addEventListener("DOMContentLoaded", function () {

    window.sr = ScrollReveal({
        reset: true
    });

    sr.reveal('.features-grid', {
        duration: 500,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });
});
