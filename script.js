function HeaderEvent() {
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




HeaderEvent();