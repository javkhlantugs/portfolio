$(document).on('turbolinks:load', function() {

	$(".js-designer").click(function(){
		$(".designer-window").toggleClass('window-inactive window-active');
		$(this).toggleClass('title-up title-center');
		$(".designer-items").toggleClass('.designer-items-inactive', fadeDesigner());
	});

	$(".js-developer").click(function () {
		$(".developer-window").toggleClass('window-active window-inactive');
		$(this).toggleClass('title-up title-center');
		$('.developer-items').toggleClass('developer-items-inactive,', fadeDeveloper());
	})

	
});

function fadeDesigner() {
	$(".designer-items").fadeToggle('fast', 'linear');
}

function fadeDeveloper() {
	$(".developer-items").fadeToggle('fast', 'linear')
}