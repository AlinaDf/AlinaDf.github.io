$(document).ready(function() {
    let button1 = $('#arrow1');
    let button2 = $('#arrow2');
    let button3 = $('#arrow3');
    let button4 = $('#arrow4');
    let button5 = $('#arrow5');

    let buttonMob1 = $('#arrowMob1');
    let buttonMob2 = $('#arrowMob2');
    let buttonMob3 = $('#arrowMob3');
    let buttonMob4 = $('#arrowMob4');

    let button6 = $('#arrow6');

    let body1 = $('.cab__table-spoiler-1');
    let body2 = $('.cab__table-spoiler-2');
    let body3 = $('.cab__table-spoiler-3');
    let body4 = $('.cab__table-spoiler-4');
    let body5 = $('.cab__table-spoiler-5');
    let body6 = $('.cab__table-spoiler-6');

    let bodyMob1 = $('.cab__table-spoiler-mob-1');
    let bodyMob2 = $('.cab__table-spoiler-mob-2');
    let bodyMob3 = $('.cab__table-spoiler-mob-3');
    let bodyMob4 = $('.cab__table-spoiler-mob-4');

    let bg2 = $('.cab__table-show-2');
    let bg3 = $('.cab__table-show-3');
    let bg4 = $('.cab__table-show-4');
    let bg5 = $('.cab__table-show-5');

    let bgMob2 = $('.cab__mob-block-bg-2');
    let bgMob3 = $('.cab__mob-block-bg-3');
    let bgMob4 = $('.cab__mob-block-bg-4');

    button1.on("click", function() {
        body1.toggleClass('show');
        $(this).toggleClass('active');
    });

    button2.on("click", function() {
        body2.toggleClass('show');
        bg2.toggleClass('active');
        $(this).toggleClass('active');
    });

    button3.on("click", function() {
        body3.toggleClass('show');
        bg3.toggleClass('active');
        $(this).toggleClass('active');
    });
    
    button4.on("click", function() {
        body4.toggleClass('show');
        bg4.toggleClass('active');
        $(this).toggleClass('active');
    });
    
    button5.on("click", function() {
        body5.toggleClass('show');
        bg5.toggleClass('active');
        $(this).toggleClass('active');
    });

    button6.on("click", function() {
        body6.toggleClass('show');
        $(this).toggleClass('active');
    });

    buttonMob1.on("click", function() {
        bodyMob1.toggleClass('show');
        $(this).toggleClass('active');
    });

    buttonMob2.on("click", function() {
        bodyMob2.toggleClass('show');
        $(this).toggleClass('active');
        bgMob2.toggleClass('active');
    });

    buttonMob3.on("click", function() {
        bodyMob3.toggleClass('show');
        $(this).toggleClass('active');
        bgMob3.toggleClass('active');
    });

    buttonMob4.on("click", function() {
        bodyMob4.toggleClass('show');
        $(this).toggleClass('active');
        bgMob4.toggleClass('active');
    });

    /* --------------------------------------------- */

    let tab1 = $("#button1");
    let tab2 = $("#button2");
    let tab3 = $("#button3");
    let tab4 = $("#button4");
    let tab5 = $("#button5");
    let tab6 = $("#button6");
    let tab7 = $("#button7");

    let tabBody = $(".cab__table");

    tab1.on("click", function() {
        $(this).addClass('active');
        tabBody.addClass('active');
        $(tab2).removeClass('active');
        $(tab3).removeClass('active');
        $(tab4).removeClass('active');
        $(tab5).removeClass('active');
        $(tab6).removeClass('active');
        $(tab7).removeClass('active');
        
        tabBody.addClass('active');
    });

    tab2.on("click", function() {
        $(this).addClass('active');
        tabBody.addClass('active');
        $(tab1).removeClass('active');
        $(tab3).removeClass('active');
        $(tab4).removeClass('active');
        $(tab5).removeClass('active');
        $(tab6).removeClass('active');
        $(tab7).removeClass('active');

        tabBody.addClass('active');
    });
    
    tab3.on("click", function() {
        $(this).addClass('active');
        tabBody.addClass('active');
        $(tab1).removeClass('active');
        $(tab2).removeClass('active');
        $(tab4).removeClass('active');
        $(tab5).removeClass('active');
        $(tab6).removeClass('active');
        $(tab7).removeClass('active');

        tabBody.addClass('active');
    });

    tab4.on("click", function() {
        $(this).addClass('active');
        tabBody.addClass('active');
        $(tab1).removeClass('active');
        $(tab2).removeClass('active');
        $(tab3).removeClass('active');
        $(tab5).removeClass('active');
        $(tab6).removeClass('active');
        $(tab7).removeClass('active');

        tabBody.addClass('active');
    });

    tab5.on("click", function() {
        $(this).addClass('active');
        tabBody.addClass('active');
        $(tab1).removeClass('active');
        $(tab2).removeClass('active');
        $(tab4).removeClass('active');
        $(tab3).removeClass('active');
        $(tab6).removeClass('active');
        $(tab7).removeClass('active');

        tabBody.addClass('active');
    });

    tab6.on("click", function() {
        $(this).addClass('active');
        tabBody.addClass('active');
        $(tab1).removeClass('active');
        $(tab2).removeClass('active');
        $(tab4).removeClass('active');
        $(tab3).removeClass('active');
        $(tab5).removeClass('active');
        $(tab7).removeClass('active');

        tabBody.addClass('active');
    });

    tab7.on("click", function() {
        $(this).addClass('active');
        tabBody.addClass('active');
        $(tab1).removeClass('active');
        $(tab2).removeClass('active');
        $(tab4).removeClass('active');
        $(tab3).removeClass('active');
        $(tab6).removeClass('active');
    });
}); 
