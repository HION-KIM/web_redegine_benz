function HeaderEventInit() {
    function headerMenuEvent() {
        $('header .menu_box>ul>li').mouseenter(function () {
            $('.menu_box>ul').addClass('active');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });

        $('header .menu_box>ul>li:nth-child(5), .menu_box>ul>li:nth-child(6)').mouseleave(function () {
            $(this).removeClass('active');
            $('.menu_box>ul').removeClass('active');
        });

        $('header .menu_box>ul>li:nth-child(5), .menu_box>ul>li:nth-child(6)').mouseenter(function () {
            $('.side_menu_box').removeClass('active');
        });

        $('header .menu_box>ul>li').not(':nth-child(5)').not(':nth-child(6)').mouseenter(function () {
            $('.side_menu_box').addClass('active');
        });

        $('header .menu_box>ul>li').mouseenter(function () {

            var $index = $(this).index();

            $("header .side_menu_bar>nav").siblings().removeClass('active');
            $("header .side_menu_bar>nav").eq($index).addClass('active');
        });

        $('header .side_menu_bar ul>li').mouseenter(function () {
            let $this = $(this);
            $this.addClass('active');
            $this.siblings().removeClass('active');
        });

        $('header .side_menu_box').click(function () {
            $(this).removeClass('active');
            $('.menu_box>ul').removeClass('active');
            $('.menu_box>ul>li').removeClass('active');
        });

        $('header .side_menu_bar').click(function () {
            e.stopPropagation();
        });
    }

    function searchBoradInit() {
        $('header .search_icon').click(function () {
            $('header .search_board').toggleClass('active');
            $('header .search_board .img_box > .filter').toggleClass('active');
            $('body').toggleClass('no-scroll');
        });

        $('header .search_board .closed_box').click(function () {
            $('header .search_board').removeClass('active');
            $('header .search_board .img_box > .filter').removeClass('active');
            $('body').removeClass('no-scroll');
        });
    }

    function hambergerMenuInit() {
        $('.hamberger-btn').click(function () {
            $(this).toggleClass('active');

            if ($(this).hasClass('active')) {
                $('header .header_inner>.logo_box').addClass('active');
                $('header .hamberger-box').addClass('active');
                $('body').addClass('no-scroll');
            } else {
                $('header .header_inner>.logo_box').removeClass('active');
                $('header .hamberger-box').removeClass('active');
                $('header .hamberger-box .menu-box ul > li').removeClass('hover');
                $('body').removeClass('no-scroll');
                $('header .hamberger-box .menu-box ul > li').children('ul').slideUp();
            }
        });
    }

    function hambergerMenuHover() {

        $('header .hamberger-box .menu-box ul > li> a').mouseenter(function () {
            var $this = $(this).parent();
            var $index = $(this).parent().index();

            $this.siblings().removeClass('hover');
            $this.addClass('hover');
        });
    }

    function hambergerMenuBoxMoVerInit() {

        $('header .hamberger-box .menu-box-mo-ver ul > li').click(function () {



            var $this = $(this);

            $this.children('ul').slideToggle();


        });

        $('header .hamberger-box .menu-box-mo-ver ul > li > ul').click(function (e) {
            e.stopPropagation();
        })
    }

    headerMenuEvent();
    searchBoradInit();
    hambergerMenuInit();
    hambergerMenuHover();
    hambergerMenuBoxMoVerInit();
}

function MainSection1BannerInit() {
    let $autoPlayState = true;

    var swiperBanner = new Swiper(".banners-Swiper", {
        loop: true,
        speed: 1000,
        pagination: {
            el: ".banners-Swiper>.swiper-pagination-wrapper>.swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
        on: {
            init: function () {
                $autoPlayState = this.autoplay.running;
            }
        }
    });




    $('.toggle-btn').click(function () {
        if ($autoPlayState) {
            swiperBanner.autoplay.stop();
            $('.play').addClass('active');
            $('.pause').removeClass('active');
        } else {
            swiperBanner.autoplay.start();
            $('.pause').addClass('active');
            $('.play').removeClass('active');
        }

        $autoPlayState = !$autoPlayState;
    })
}

function MainSection2ProductInit() {

    var swiperProduct = new Swiper(".Product-swiper", {
        loop: true,
        speed: 500,
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 3,
        pagination: {
            el: ".Product-swiper>.swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            415: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },
            769: {
                spaceBetween: 40,
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            1241: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 40,
            },
        }
    });

    function CategorySelect() {
        $('.sec-product .drop-box').mouseenter(function () {
            $(this).addClass('hover');
        });
        $('.sec-product .drop-box').mouseleave(function () {
            $(this).removeClass('hover');
        });
        $('.sec-product .drop-box>.select-list>li').on('click', function () {
            let $idx = $(this).index();

            $('.sec-product .drop-box').removeClass('hover');

            $('.sec-product .drop-box>.select-btn>span').siblings().removeClass('active');
            $('.sec-product .drop-box>.select-btn').find('span').eq($idx).addClass('active');

            $('.sec-product .swiper-box >li').siblings().removeClass('active');
            $('.sec-product .swiper-box').find('li').eq($idx).addClass('active');

        });
    }

    CategorySelect();
}

function MainSection5BrandStoyuInit() {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        "(min-width: 769px)": function () {
            var scrollTime = 7000;

            var tl = gsap.timeline();

            tl.from(".marquee-img-wrap-1", { yPercent: -110 }, 0)
                .from('.marquee-img-wrap-2', { yPercent: +110 }, 0);

            ScrollTrigger.create({
                animation: tl,
                trigger: ".sec-brand-story",
                start: "top top",
                end: "+=" + scrollTime,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                // markers: true,
            });

            gsap.set(".text-box", { opacity: 0 });
            gsap.set(".text-box-1", { opacity: 1 });

            var opa = gsap.timeline();
            opa.to(".text-box-1", { opacity: 0 })
                .to(".text-box-2", { opacity: 1 })
                .to(".text-box-2", { opacity: 0 })
                .to(".text-box-3", { opacity: 1 });

            ScrollTrigger.create({
                animation: opa,
                trigger: ".sec-brand-story",
                start: "top top",
                end: "+=" + scrollTime,
                scrub: true,
                markers: true,
            });
        }
    });

    function toggleSlide() {
        $('.sec-brand-story .text-box-wrap>.text-box>.h2').click(function () {
            if ($(window).width() >= 415 && $(window).width() <= 767)
                $(this).toggleClass('active').parent().find('p:nth-child(3)').slideToggle();
        });
    }

    toggleSlide();

}

HeaderEventInit();
MainSection1BannerInit();
MainSection2ProductInit();
MainSection5BrandStoyuInit();