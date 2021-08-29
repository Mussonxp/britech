$(document).ready(function() {

    // Slick slider on index.html
    $(function() {
        $('.slider').slick({
            infinite: true,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
        });

    })

    // Skills Bar move func

    function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
        const skillsElement = $(node);
        skillsElement.each(function(value, item) {
            $(item).find(nodeLine).animate({
                width: item.dataset.progressPercent + '%'
            }, animationLength);
            $(item).find(tooltip).show(animationLength);
        });
    }

    let animate = true;


    $(window).scroll(function() {

        if ($('.skills').offset().top <= $(window).scrollTop() + 150) {
            if (animate) {
                moveProgressBar('.skills__element', '.skills__line', '.skills__tooltip');
            }
            animate = false;
        }

    });

    //slients logo slider
    $('.clients__slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // One more function

});