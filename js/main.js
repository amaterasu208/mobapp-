// JQUERY
// burger
$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});
// read more
$(function(){
        $('.reviews__button').on('click', function(){
                const btn = $(this);
                const loader = btn.find('span');
                $.ajax({
                        url: '/data.html',
                        type: 'GET',
                        beforeSend: function() {
                                btn.attr('disabled', true);
                                loader.addClass('d-inline-block');
                        },
                        success: function(responce){
                                setTimeout(function(){
                                        loader.removeClass('d-inline-block');
                                        btn.attr('disabled', false);
                                        $('.reviews__button ').before(responce);
                                }, 1000)
                        },
                        error: function() {
                                alert('ERROR!');
                                loader.removeClass('d-inline-block');
                                btn.attr('disabled', false);
                        }
                        
                })
        })
})


// JS
// navbar scroll
window.onscroll = function() {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled !== 0){
                document.querySelector('.header').style.opacity = '0.7';
        } else{
                document.querySelector('.header').style.opacity = '1';
        };
};