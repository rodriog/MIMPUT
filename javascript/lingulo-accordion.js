$(function()
{var closedHeight=35;var speedClose=150;var speedOpen=300;var acc=".lingulo-accordion"; var tags=["h3","h4"];var old=null;
for(var eachTag = 0; eachTag< tags.length; eachTag++) {
	$(acc+" > div "+eachTag+":first-child").click(function(){
		var i=$(this).parent().index();if(old!==i)
		{$(acc+" > div:eq("+ old+")").animate({height:closedHeight+"px"},speedClose);var curHeight=$(acc+" > div:eq("+ i+")").height();var autoHeight=$(acc+" > div:eq("+ i+")").css('height','auto').height();$(acc+" > div:eq("+ i+")").height(curHeight).animate({height:autoHeight},speedOpen,function()
		{$(acc+" > div:eq("+ i+")").css('height','auto');});$(acc+" > div:eq("+ i+")").animate({height:"auto"});old=i;}
		else
		{$(acc+" > div:eq("+ old+")").animate({height:closedHeight+"px"});old=null;}});
}
});