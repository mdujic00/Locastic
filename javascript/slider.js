$(document).ready(function()
{
	var $selectors = $("#selector-container > .selector");

	$selectors.each(function(selector)
	{
		var image = new Image();
		image.src = $(selector).attr("data-largeImage-src");
	});
	
	
	
	$selectors.click(function()
	{
		selectSelector(this);
	});
	
	
	function selectSelector(selector)
	{
		var $selector = $(selector);
		var $sliderImage = $("#slider-image");
		
		$("#selector-container > .selector.selected").removeClass("selected");
		$selector.addClass("selected");
		
		$sliderImage.fadeOut(200,"linear",function()
		{	
			$sliderImage.attr("src", $selector.attr("data-largeImage-src"));	
			$sliderImage.fadeIn(700,"linear");
		});
	}

});