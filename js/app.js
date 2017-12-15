$(document).ready(function(){
    // Add smooth scrolling to all links in navbar
    $(".navbar a, a[href='#where']").on('click', function(event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            const hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                window.location.hash = hash;
            });
        }
    });
});

/*
 * Navbar hamburger animation on toggle
 */
function navbarToggle(iconBarToggle) {
    iconBarToggle.classList.toggle("change");
}
