/*
  index.js
*/
var sMenu = 'home';
window.onresize = function() {
    eLoad();
};

function eLoad() {
    eClick(document.getElementById(sMenu));
    doAction({ field: 'carousel' });
}

function doAction(oArg) {
    var sField = oArg.field;

    switch (sField) {
        case 'carousel':
            var oHeadBg = document.getElementById('head_bg');
            var iWidth = oHeadBg.clientWidth;
            var iMax = oHeadBg.getElementsByTagName('img').length;
            iMax = iMax * iWidth;
            var timer = setInterval(function() {
                if (parseInt(oHeadBg.style.left) > -iMax) {
                    oHeadBg.style.left = parseInt(oHeadBg.style.left) - iWidth + 'px'
                    oHeadBg.style.transition = 'left 5s';
                    if (parseInt(oHeadBg.style.left) <= -iMax) {
                        setTimeout(function() {
                            oHeadBg.style.left = '0px'
                            oHeadBg.style.transition = 'right 0s';
                        }, 1000)
                    }
                } else {
                    oHeadBg.style.left = '0px'
                    oHeadBg.style.transition = 'left 0s';
                }
            }, 3000);
            break;
    }
}

function eClick(oThis) {
    switch (oThis.id) {
        case 'about':
            var sShow = ('' === document.getElementById('about1').style.display) ? 'none' : '';
            document.getElementById('about1').style.display = sShow;
            break;
        default:
            document.getElementById('about1').style.display = 'none';
            break;
    }

    document.getElementById(sMenu).className = '';
    sMenu = oThis.id;
    document.getElementById(sMenu).className = 'hover';
}

function showDropdown() {
    $(".contact-dropdown").show();
}

function hideDropdown() {
    $(".contact-dropdown").hide();
}

function middleSlideHover(obj) {
    $(obj).children('.midle-slide-des-block').show(500);
}

function middleSlideLeave(obj) {
    $(obj).children('.midle-slide-des-block').hide(500);
}

function mapPointHover(obj) {
    $(obj).children('svg').children('path').removeClass("map_point_leave");
    $(obj).children('svg').children('path').addClass("map_point_hover");
}

function mapPointLeave(obj) {
    $(obj).children('svg').children('path').removeClass("map_point_hover");
    $(obj).children('svg').children('path').addClass("map_point_leave");
}

$(function() {
    $('.top-swiper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        customOnChange: function() {
            let index_currentSlide = $('.top-swiper').slickCurrentSlide();
            $(".top_silde_page").attr("src", "assets/images/Ellipse_white.png");
            $(".top_silde_page").eq(index_currentSlide == 4 ? 0 : index_currentSlide - 1).attr("src", "assets/images/Ellipse_black.png");
        }
    });

    $('.top-swiper').on('beforeChange', function(event, slick, currentSlide) {
        $(".top_silde_page").attr("src", "assets/images/Ellipse_white.png");
        $(".top_silde_page").eq(currentSlide + 1 > 2 ? 0 : currentSlide + 1).attr("src", "assets/images/Ellipse_black.png");
    });

    var middle_swiper = new Swiper(".middle-swiper", {
        slidesPerView: 5,
        spaceBetween: 100,
        centeredSlides: true,
        initialSlide: 1
    });

    middle_swiper.on('activeIndexChange', function() {
        let index_currentSlide = middle_swiper.activeIndex;
        $(".midle-slide-block").hide();
        $(".midle-slide-block-sm").show();
        $(".midle-slide-block-sm").eq(index_currentSlide).hide();
        $(".midle-slide-block").eq(index_currentSlide).show();
    })

    $("#midle_prev").on('click', function() {
        middle_swiper.slidePrev();
    });

    $("#midle_next").on('click', function() {
        middle_swiper.slideNext();
    });

    var brand_swiper = new Swiper(".brand_swiper", {
        slidesPerView: 6,
        spaceBetween: 100,
        autoplay: {
            delay: 5000,
        },
        loop: true
    });
})