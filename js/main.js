document.addEventListener("DOMContentLoaded", function() {
    
    let sr = ScrollReveal({
        reset: true
    });
    

    sr.reveal('#splash-dialog', {
        duration: 1500
    });


    sr.reveal('.features-grid', {
        duration: 650,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    });


  });


  // #splash-dialog
  // .button-wrapper