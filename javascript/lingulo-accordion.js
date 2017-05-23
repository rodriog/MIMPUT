$(function()
{var closedHeight=35;var speedClose=150;var speedOpen=300;var acc="#lingulo-accordion";var elem="h3";var old=null;$(acc+" > div "+ elem+":first-child").click(function()
{var i=$(this).parent().index();if(old!==i)
{$(acc+" > div:eq("+ old+")").animate({height:closedHeight+"px"},speedClose);var curHeight=$(acc+" > div:eq("+ i+")").height();var autoHeight=$(acc+" > div:eq("+ i+")").css('height','auto').height();$(acc+" > div:eq("+ i+")").height(curHeight).animate({height:autoHeight},speedOpen,function()
{$(acc+" > div:eq("+ i+")").css('height','auto');});$(acc+" > div:eq("+ i+")").animate({height:"auto"});old=i;}
else
{$(acc+" > div:eq("+ old+")").animate({height:closedHeight+"px"});old=null;}});});