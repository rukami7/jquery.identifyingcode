;(function($){
	$.fn.idCode = function(num){
		$(this).empty();
		if (!num) num=4;
		if ($(this).css('position')=='static') $(this).css('position', 'relative');
		$(this).css({'backgroundColor': randomColor(0.2), 'overflow': 'hidden', 'user-select': 'none'});
		var code='';
		for (var i=0;i<num;i++) {
			var chat=randomChar();
			$('<span></span>').html(chat+' ').css({'display': 'inline-block', 'margin': 1, 'color': randomColor(1,204), 'transform': randomDeg()}).appendTo($(this));
			code+=chat;
		}
		$('<span></span>').css({'borderBottom': '2px solid '+randomColor(0.5), 'transform': randomDeg(30), 'width': '100%', 'position': 'absolute', 'left': 0, 'top': randomPercent()}).appendTo($(this));
		$(this).attr('idcode',code);
		return $(this);
	}
	$.fn.getIdCode = function(){
		return $(this).attr('idcode');
	}
	$.fn.testIdCode = function(str,f){
		if (f) return str.toUpperCase() === $(this).getIdCode().toUpperCase();
		 else return str === $(this).getIdCode();
	}

	$.idCode = function(jQueryObj){
		if (!(jQueryObj instanceof $)) { jQueryObj=$(jQueryObj); };
		return jQueryObj.idCode().getIdCode();
	}
	$.getIdCode = function(jQueryObj){
		if (!(jQueryObj instanceof $)) { jQueryObj=$(jQueryObj); };
		return jQueryObj.getIdCode();
	}
	$.testIdCode = function(jQueryObj,str,f){
		if (!(jQueryObj instanceof $)) { jQueryObj=$(jQueryObj); };
		return jQueryObj.testIdCode(str,f);
	}

	function randomChar(){
		var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxzy";
		var n=Math.floor(Math.random()*s.length);
		return s[n];
	}
	function randomColor(a,max){
		if (!a) a=1;
		if (!max) max=256;
		var r=Math.floor(Math.random()*max);
		var g=Math.floor(Math.random()*max);
		var b=Math.floor(Math.random()*max);
		return 'rgba('+r+','+g+','+b+','+a+')';
	}
	function randomDeg(range){
		if (!range) range=45;
		var deg=Math.floor(Math.random()*range*2)-range;
		return 'rotate('+deg+'deg)';
	}
	function randomPercent(){
		var p=Math.floor(Math.random()*80)+10;
		return p+'%';
	}
})(jQuery)