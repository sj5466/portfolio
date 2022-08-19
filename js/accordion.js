// study 아코디언
$(function(){
    $('.study .item').click(function(e){
        e.preventDefault();
        $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
        $(this).siblings().find('i').removeClass('fa-minus').addClass('fa-plus');
        $(this).find('.desc').slideToggle().addClass('active');
        $(this).siblings().find('.desc').slideToggle().removeClass('active');
    },1000);
});