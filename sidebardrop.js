src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js">




$('.submenu1').click(function(){
    $('.submenu1_show').toggleClass('hidden');
    $('.nav_bar_chevron_down').toggleClass('rotate');
});


$('#menu_bar').click(function(){
    $('.wrapper').toggleClass('closed');
});