$(document).on('turbolinks:load', function() {

	$(".js-designer").click(function(){
		$(".designer-window").toggleClass('window-inactive window-active')
		$(this).toggleClass('title-up title-center')
	});

	$(".js-developer").click(function () {
		$(".developer-window").toggleClass('window-active window-inactive')
		$(this).toggleClass('title-up title-center')
	})
});