$(function () {
    
    $('.reviews__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:true,
        arrows:false,
    });


    $('.doctors__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.doctors__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.doctors__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

});