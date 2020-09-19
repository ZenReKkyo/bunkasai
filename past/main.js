/*globals $:false, document:false*/
/*global window */
/*global setTimeout*/

//all_page---header_closed_when_scrolled
var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        if(winScrollTop >= 100){
        $('header').addClass('hide');
        }
    } else {
        $('header').removeClass('hide');
    }
    startPos = winScrollTop;
});

//all_page---hover_global_nav
$(function() {
    $('.toggle').on('mouseenter mouseleave',function(){
        $('.toggle span:nth-child(1),.toggle span:nth-child(3)').toggleClass('hover');
    });
});

//all_page---open_global_nav
$(function() {
    $('.toggle').click(function(){
    $(this).toggleClass('active');
    if ($(this).hasClass('active')){
$('main').addClass('active');
$('.logo,.global_nav').fadeIn(500,'swing');
    }else{
$('main').removeClass('active');
$('.logo,.global_nav').fadeOut(500,'swing');
    }
    });
});



//top_page---_change_icons_color
$(function() {
    $('.top_page .toggle').on('click',function(){
        $('.top_page').toggleClass('open');
        if($('.top_page').hasClass('open')){
            document.getElementById('TwitterIcon').src = 'assets/share_icon/Twitter_icon.svg';
            document.getElementById('LINEIcon').src = 'assets/share_icon/LINE_icon.svg';
            document.getElementById('firstreiwa').src = 'assets/share_icon/firstreiwa.svg';
            $('.top_page .toggle span').css('border-bottom-color','#000');
        }else{
            document.getElementById('TwitterIcon').src = 'assets/share_icon/top_page_Twitter_icon.svg'; 
            document.getElementById('LINEIcon').src = 'assets/share_icon/top_page_LINE_icon.svg';  
            document.getElementById('firstreiwa').src = 'assets/share_icon/top_page_reiwa_first.svg';
            $('.top_page .toggle span').css('border-bottom-color','#FFF');
        }  
    });
});

//top_page---countDown
$(function() {countDown();} );
  function countDown() {
  var startDateTime = new Date();
  var endDateTime = new Date("October 30,2020 09:30:00");
  var left = endDateTime - startDateTime;
  var d = ('00' + Math.floor(left / (1000 * 60 * 60 * 24))).slice(-2);
  var h = ('00' + Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
  var m = ('00' + Math.floor((left % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  var s = ('00' + Math.floor((left % (1000 * 60)) / 1000)).slice(-2);
  $(".count_down_timer").text(d + '  ' + h + '  ' + m + '  ' + s);
    setTimeout('countDown()', 1000);
  }



//akatsuki_page---scroll_action
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});



//group_page---slick_slider
$(function() {
      $('.slider').slick({
        dots: false,
        autoplay: false,
        speed: 700,
        cssEase: 'ease',
        centerMode: true,
        slideToShow: 3,
        centerPadding: '8.75vw',
        prevArrow: '<img src="assets/others/arrow_prev.svg" class="slick-prev">',
        nextArrow: '<img src="assets/others/arrow_next.svg" class="slick-next">'
      }); 
});

//group_page---slide_departments_on_sp
$(function() {
    var w = $(window).width();
    var x = 800;
    if (w <= x) {
    $(function(){
        $('.department').click(function(){
     $(this).next('.corporate').slideToggle();
 $('.department').not($(this)).next('.corporate').slideUp();
        });
    });    
    } else {
    $('.slider').slick({
        });
    }
});

//group_page---fadeIn_slider_on_pc
$(function() {
    $('.corporate li').on('click', function() {
        $('.corporate li').removeClass('active');
        $(this).addClass('active');
        $('.slider').addClass('active');
    });
});


//group_page---jump_each_explain
$(function(){
    $('.corporate li').on('click', function() {
        var number = $(this).attr('id');
        $('.slider').slick('slickGoTo', number-1, false);
    });
});


//night_fes_page---change_icons_color
$(function() {
    $('.night_fes_page .toggle').on('click',function(){
        $('.night_fes_page').toggleClass('open');
        if($('.night_fes_page').hasClass('open')){
            document.getElementById('TwitterIcon').src = 'assets/share_icon/Twitter_icon.svg';
            document.getElementById('LINEIcon').src = 'assets/share_icon/LINE_icon.svg';
            $('.night_fes_page .toggle span').css('border-bottom-color','#000');
        }else{
            document.getElementById('TwitterIcon').src = 'assets/share_icon/top_page_Twitter_icon.svg'; 
            document.getElementById('LINEIcon').src = 'assets/share_icon/top_page_LINE_icon.svg';
            $('.night_fes_page .toggle span').css('border-bottom-color','#FFF');
        }  
    });
});

//night_fes_page---jump_to_about_us
$(function(){
    $('.to_about_us').on('click',function(){
        $('.night_fes_page_first_view').fadeOut(500);
        $('.about_night_fes,.back_to_first_view').fadeIn(500);
    });
});
$(function(){
    $('.back_to_first_view').on('click',function(){
        $('.about_night_fes,.back_to_first_view').fadeOut(500);
        $('.night_fes_page_first_view').fadeIn(500);
    });
});

//night_fes_page---countDown_timer
$(function() {
    nightFesCountDown();
  });
  function nightFesCountDown() {
  var startDateTime_NF = new Date();
  var endDateTime_NF = new Date("November 03,2019 16:30:00");
  var NF_left = endDateTime_NF - startDateTime_NF;
  var NF_d = ('00' + Math.floor(NF_left / (1000 * 60 * 60 * 24))).slice(-2);
  var NF_h = ('00' + Math.floor((NF_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
  var NF_m = ('00' + Math.floor((NF_left % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  var NF_s = ('00' + Math.floor((NF_left % (1000 * 60)) / 1000)).slice(-2);
  $(".night_fes_count_down_timer").text(NF_d + '  ' + NF_h + '  ' + NF_m + '  ' + NF_s);
    setTimeout('nightFesCountDown()', 1000);
  }







