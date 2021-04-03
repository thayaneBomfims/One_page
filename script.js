
            $(".owl-carousel").owlCarousel({
                autoplay: true,
                autoplayHoverPause: true,
                items: 3,
                nav: true,
                dots: true,
                loop: true,

                navText:["<div class='nav-btn prev-slide'> <i class='fas fa-chevron-left' style='font-size: 10px'></i> </div>","<div class='nav-btn next-slide'> <i class='fas fa-chevron-right' style='font-size: 10px'></i> </div>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });

    window.onload = function () {
        scrollSpy('#menu', {
            sectionClass: '.scrollspy',
            menuActiveTarget: '.menu-item',
            offset: 100,
        })
    }

    $(".scrollTo").on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var offset = 70;

        $('html, body').animate({
            scrollTop: ($(target).offset().top - offset)
        }, 1000);
    });

    mybutton = document.getElementById("Btntop");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    function topFunction(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }