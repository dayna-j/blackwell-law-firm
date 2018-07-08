'use strict';

document.addEventListener("DOMContentLoaded", function () {

    var materialDownArrow = document.getElementById('material-arrow-down');

    materialDownArrow.addEventListener('click', function () {
        window.scrollBy(0, 100 * window.innerHeight / 100);
    });

    var sr = ScrollReveal();

    sr.reveal('.splash-sr', {
        duration: 1500
    }, 375);

    sr.reveal('.features-grid', {
        duration: 650,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        reset: true
    });
});
