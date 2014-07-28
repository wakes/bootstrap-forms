(function($) {
$(function() {
	// dropdowns need to be configured when javascript is enabled.
	$('.dropdown-select').hide();
	$('.dropdown-toggle').show();

	// sync selected list item with the select control
	$('.dropdown-menu a').on('click', function(ev) {
		var rel = $(this).attr('rel');
		$(rel + '_select').val($(this).data('value'));
		$(rel + '_select').change();
		$(rel + '_label').text($(this).text());
	});
	// for optionsets hide the actual radio input if javascript enabled
	$('.optionset input[type="radio"]').hide();

	// radio buttons need active set on them when the label is clicked
	$('.optionset label').on('click', function(ev) {
		$('.btn', $(this).parents('.optionset')).removeClass('active');
		$(this).parents('.btn').addClass('active');
		$('input[type="radio"]', $(this)).prop('checked', true);
	});


	if($('textarea.wysiwyg').length) {
		$('textarea.wysiwyg').each(function() {
			var $t = $(this);
		    $t.tinymce({
		      theme: "advanced",
		      theme_advanced_toolbar_location: "top",
		      theme_advanced_buttons1: $t.attr('data-buttons'),
		      theme_advanced_buttons2: "",
		      theme_advanced_buttons3: "",
		      theme_advanced_blockformats: $t.attr('data-blockformats'),
		      content_css: ($t.attr('data-css') ? ($('base')).attr('href') + $t.attr('data-css') : null)
		    });
		});
	}



	if($('select.chosen').length) {
	    $('select.chosen').chosen({
	      disable_search_threshold: $(this).attr('data-search-threshold')
	    });
    }


	if($('textarea[maxlength]').length) {
		$('textarea[maxlength]').parent().append("<p class='notes charsRemaining'>&nbsp;</p>");
		$('textarea[maxlength]').keyup(function(){
			var charText = $(this).attr('characters-remaining-text');
			if(!charText) charText = " characters remaining";
			var max = parseInt($(this).attr('maxlength'));
			if($(this).val().length > max){
				$(this).val($(this).val().substr(0, $(this).attr('maxlength')));
			}
			$(this).parent().find('.charsRemaining').html((max - $(this).val().length) + " " + charText);
		});
	}

	if($('.field.bootstrapbuttongroup').length) {

		$('.field.bootstrapbuttongroup .btn-group button').click(function(e) {
			e.preventDefault();
			var $holder = $(this).closest('.field.bootstrapbuttongroup');
			$holder.find('.active').removeClass('active');
			$(this).addClass('active');
			$holder.find(':hidden').val($(this).data('value')).trigger('change');

		}).filter('.active').click();
	}


  });


})(jQuery);
