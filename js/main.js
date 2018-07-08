document.addEventListener("DOMContentLoaded", function() {
    
    let materialDownArrow = document.getElementById('material-arrow-down');

    let sr = ScrollReveal();

    sr.reveal('.splash-sr', {
        duration: 1250
    }, 312.5);

    sr.reveal('.features-grid', {
        duration: 650,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        reset: true
    });

    
    
    materialDownArrow.addEventListener('click', function(){
        window.scrollBy(0, 100 * window.innerHeight/100);
    });



  });
