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

function ch_prev_hover() {
    $("#midle_prev").attr("src", "assets/images/left_slide_btn_hover.png");
}

function rm_prev_hover() {
    $("#midle_prev").attr("src", "assets/images/left_slide_btn.png");
}

function ch_next_hover() {
    $("#midle_next").attr("src", "assets/images/right_slide_btn_hover.png");
}

function rm_next_hover() {
    $("#midle_next").attr("src", "assets/images/right_slide_btn.png");
}

$(function() {
    sr = ScrollReveal({ mobile: false, scale: 1, duration: 800, easing: 'linear' });

    if (sr.isSupported()) {
        document.documentElement.classList.add('sr');
        sr.reveal('#GRACESS_Company', {
            distance: '15px',
            origin: 'top'
        });
        sr.reveal('#Text_by', {
            distance: '15px',
            origin: 'top',
            delay: 400,
        });
        sr.reveal('#Text_b', {
            distance: '15px',
            origin: 'top',
        });
        sr.reveal('#Text_bz', {
            distance: '15px',
            origin: 'top',
        });
        sr.reveal('#Text_bx', {
            distance: '15px',
            origin: 'top',
        });
        sr.reveal('#n_', {
            distance: '15px',
            origin: 'top',
            delay: 400,
            afterReveal: function() { $(".Rectangle_250").show(400) }
        });
        sr.reveal('#Enter_your_Email, #Text_bw', {
            distance: '15px',
            origin: 'top',
            delay: 800,
        });
        sr.reveal('.num_subtitle', {
            distance: '15px',
            origin: 'bottom',
        });
        sr.reveal('.num_count', {
            distance: '15px',
            origin: 'bottom',
            delay: 400,
            beforeReveal: function() { count_start() }
        });
        sr.reveal('#Text_cex, #Text_cey', {
            distance: '15px',
            origin: 'top',
        });
        sr.reveal('#About_Us', {
            distance: '15px',
            origin: 'top',
            afterReveal: function() { $(".Line_21").show(400) }
        });
        sr.reveal('#Text_ch, #Text_cia', {
            distance: '15px',
            origin: 'top',
            delay: 400,
        });
        sr.reveal('#n__ch', {
            distance: '15px',
            origin: 'top',
            delay: 800,
        });
        sr.reveal('#Group_279', {
            distance: '15px',
            origin: 'top',
            delay: 1200,
        });
        sr.reveal('#Mask_Group_62', {
            distance: '15px',
            origin: 'bottom',
        });
        sr.reveal('#Group_318, #Group_317, #Group_320, #Group_319', {
            distance: '15px',
            origin: 'top',
        });
        sr.reveal('#Path_2542', {
            distance: '15px',
            origin: 'bottom',
        });
        sr.reveal('#Path_2541', {
            distance: '15px',
            origin: 'bottom',
            delay: 400,
        });
        sr.reveal('#Our_Partner, #n__chw, #Text_chx, #Text_chy', {
            distance: '15px',
            origin: 'top',
            delay: 800,
        });
        sr.reveal('#Our_Partner, #n__chw, #Text_chx, #Text_chy', {
            distance: '15px',
            origin: 'top',
            delay: 800,
        });
        sr.reveal('.map_first_show', {
            distance: '15px',
            origin: 'top',
        });
        sr.reveal('.map_last_show', {
            distance: '15px',
            origin: 'top',
            delay: 800,
        });
    }

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
        initialSlide: 1,
        allowTouchMove: false
    });

    middle_swiper.on('activeIndexChange', function() {
        let index_currentSlide = middle_swiper.activeIndex;
        $(".midle-slide-block").hide();
        $(".midle-slide-block-sm").show();
        $(".midle-slide-block-sm").eq(index_currentSlide).hide();
        $(".midle-slide-block").eq(index_currentSlide).show();
        if (index_currentSlide == 0) {
            $("#midle_prev").hide();
        } else {
            $("#midle_prev").show();
        }
        if (index_currentSlide == 3) {
            $("#midle_next").hide();
        } else {
            $("#midle_next").show();
        }
        $(".midle-slide-block").children(".midle-slide-title-tw").hide();
        $(".midle-slide-block").children(".Component_6___1").hide();
        $(".midle-slide-block").children(".midle-slide-title-en").css("bottom", "250px");
        $(".midle-slide-block").eq(index_currentSlide).children(".midle-slide-title-en").animate({ bottom: "350px" }, 400, function() {
            $(".midle-slide-block").eq(index_currentSlide).children(".midle-slide-title-tw").show(400);
            $(".midle-slide-block").eq(index_currentSlide).children(".Component_6___1").show(400);
        });
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