var nowbox;
$(function (){
	$.scrollify({
		section:".box",
		setHeights:false,
		before:function(i,box){
			nowbox=i;
		},
	});
	$(window).on('resize',function(){
		if(nowbox){
			var nowScrl = $('.box').eq(nowbox).offset().top;
			$(window).scrollTop(nowScrl);
		}
	});
});