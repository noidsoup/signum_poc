/***********************
 * Smooth scroll on a new page
 * http://stackoverflow.com/questions/9652944/jquery-scroll-to-id-from-different-page
 ***********************/
var jump=function(e)
{
	if (e){
	   e.preventDefault();
	   var target = jQuery(this).attr("href");
	}else{
	   var target = location.hash;
	}
	var sticky_height = 73;
	jQuery('html,body').animate(
	{
	   scrollTop: jQuery(target).offset().top - sticky_height
	},800,function()
	{
	   location.hash = target;
	});
}