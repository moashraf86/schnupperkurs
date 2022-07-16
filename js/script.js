function stopScrolling (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	$('a').not('a[data-modal]').click(function(){

	});

	$('[data-modal]').click(function(e){
		e.preventDefault();
		// open If user clicks only outside the drpdown dots
		if($(e.target).hasClass('hover-dots') === false && $(e.target).hasClass('dropdown-item') === false && $(e.target).hasClass('dropdown-menu') === false) {
			var tar = $(this).attr('data-modal');
			$('.modal-window').removeClass('active');
			$(tar).addClass('active');
			$('body').css('overflow-y', 'hidden');
			$('body').on('scroll mousewheel touchmove', stopScrolling);
		}

	});

	//Close the window when clciking outside it/close icon
	$('.modal-window .overlay, .modal-window .close-modal-window').click(function(){
		$('.modal-window').removeClass('active');
		$('body').off('scroll mousewheel touchmove', stopScrolling);
		$('body').css('overflow-y', 'auto');
	});

	//stop closing the window when clicking inside the window box itself

		//Run Accordion
	// $('.collapse.accord').collapse();

	//rotate arrow
	
	// document.querySelectorAll('.target').forEach(e => {

	// 	e.addEventListener('click', e => {

	// 		document.querySelectorAll('.accordion').forEach(e => {

	// 			e.classList.add('show')
	// 		})

			
	// 	})
	// })
});	

