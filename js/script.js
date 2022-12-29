$(document).ready(function() {

    /* Чекбоксы */

    $.each($('.description__checkbox-item'), function(index, val) {
        if($(this).find('input').prop("checked")==true){
            $(this).addClass('active');
        }
    });

    $(document).on("click", '.description__checkbox-item', function(event) {
        if($(this).hasClass('active')){
            $(this).find('input').prop("checked", false);
        }else{
            $(this).find('input').prop("checked", true);
        }
        $(this).toggleClass('active');

        return false;
    });

    let nav = $('.header__mob');
    let navToggle = $('.header__burger');

    navToggle.on("click", function() {
        $(this).toggleClass('active');
        nav.toggleClass('show');
    });
});