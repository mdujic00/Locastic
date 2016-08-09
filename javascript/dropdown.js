(function($){
	$(function(){
		$('nav ul li > a:not(:only-child)').click(function(e){
			$(this).siblings('.navigation-dropdown').toggle();
			$('.navigation-dropdown').not($(this).siblings()).hide();
			e.stopPropagation();
		});
		
		$('html').click(function(){
			$('.navigation-dropdown').hide();
		});
	});
	
	document.querySelector('#navigation-toggle').addEventListener('click', function(){
		this.classList.toggle('active');
	});
	
	$('#navigation-toggle').click(function(){
		$('nav ul').toggle();
	});
	
})(jQuery);

