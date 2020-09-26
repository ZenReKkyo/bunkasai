$(function(){
    var item_num = $('div.item').length;
    var deg = 360.0/item_num;
    var red = (deg*Math.PI/180.0);
    var circle_r = $("div.item").width() * 2.5;
    $('div.item').each(function(i, elem) {
        var x = Math.cos(red * i) * circle_r + circle_r;
        var y = Math.sin(red * i) * circle_r + circle_r;
        $(elem).css('left', x);
        $(elem).css('top', y);
    });
});

$(function(){CD();});
function CD(){
    var starttime=new Date("October 30,2020 09:30:00");
    var now=new Date();
    var diff=starttime.getTime()-now.getTime();
    var d=Math.floor(diff/86400000);
    diff-=d*86400000;
    var h=Math.floor(diff/3600000);
    diff-=h*3600000;
    var m=Math.floor(diff/60000);
    diff-=m*60000;
    var s=Math.floor(diff/1000);

    var dd=('00'+d).slice(-2);
    var hh=('00'+h).slice(-2);
    var mm=('00'+m).slice(-2);
    var ss=('00'+s).slice(-2);
	
	$(".countdown-day").text(dd);
	$(".countdown-hour").text(hh);
	$(".countdown-min").text(mm);
	$(".countdown-sec").text(ss);
    setTimeout(CD, 1000);
}

$(function(){
    $('.modular').on('click',function(){
        $(this).toggleClass('modular-active');
        $('.menu2-base').toggleClass('open-menu');
    });
});