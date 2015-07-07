
jQuery(document).ready(function(){

$(function(){
	$("#splash").on('hover', '> div', function() {
		$(this).find('.hidden').slideToggle('slow');
	});
})
});