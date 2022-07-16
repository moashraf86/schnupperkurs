/* Here goes your custom Code */

//Slider #1
$(document).ready(function(){

  //Move specific boxes to other columns to make the taxonomy view
  if($(window).innerWidth() >= 767 & $(window).innerWidth() < 1200) {
    $('#content .base-destination .target').each(function(e) {$('.target-destination').append($(this))})
    $('#content .base-destination .target-2').each(function(e) {$('.target-destination-2').append($(this))})
  } else {
    $('#content .target-destination .target').each(function(e) {$('.base-destination').append($(this))})
    $('#content .target-destination-2 .target-2').each(function(e) {$('.base-destination').append($(this))})
  }

  // startSiete moreCourses slider
  $('.discoverCourses').owlCarousel({
    loop:true,
    nav: false,
    responsiveClass:true,
    margin: 20,
    stagePadding: 60,
    responsive:{
        0:{
            items:1,
            margin: 10,
        },

        560: {
          items:2,
            margin: 15,
        },

        767: {
          items:3,
            margin: 15,
        },
        
        1200:{
            items:5
        }
    }
  });

  // Suchergebnisseite moreCourses slider
  $('.moreCourses').owlCarousel({
    loop:true,
    nav: false,
    responsiveClass:true,
    margin: 10,
    stagePadding: 20,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:8
        }
    }
  });

  // Suchergebnisseite products slider
  $('.products-slider-2').owlCarousel({
    loop:true,
    nav: true,
    responsiveClass:true,
    margin: 10,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive:{
        0:{
            items:1,
            stagePadding: 0,
            dots: true
        },
        365: {
          items:1,
          stagePadding: 40,
          dots: true
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
        },
        1200:{
            items:4,
        }
    }
  });

  //Kursseite products slider
  $('.products-slider').owlCarousel({
    loop:true,
    nav: true,
    responsiveClass:true,
    margin: 10,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2
        },
        1000:{
            items:3,
            navText: [
              "<i class='fa fa-chevron-left'></i>",
              "<i class='fa fa-chevron-right'></i>",
            ]
        }
    }
  });

  //other sliders
  $('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            navText: [
              "<i class='fa fa-chevron-left'></i>",
              "<i class='fa fa-chevron-right'></i>",
            ]
        },
        1000:{
            items:3,
            navText: [
              "<i class='fa fa-chevron-left'></i>",
              "<i class='fa fa-chevron-right'></i>",
            ]
        }
    }
  });

  
  

  
});

// close the box on clicking x icon
$('.close-modal-window').click(function(){
  $('.modal-window').removeClass('active');
  $('body').css('overflow-y', 'auto')
})

//Button toggle
$('.btn-toggle').click(function() {$(this).toggleClass('true')})

// Date-picker
$(".flatpickr").flatpickr({
  dateFormat: "m-d-Y",
  "locale": "de"
});


//scroll-y issue on safari ios
$(".modal-window.modal-side-window .modal-side-window-box").css({
  "overflow-y": "scroll",
  "-webkit-overflow-scrolling": "touch"
});


// Open &Close dropdown menu
$(document).on('click', function(e) {

  if ($(e.target).hasClass('dropdown-content')) {

    console.log($(e.target));
    $(e.target).find('.fa').addClass('clicked');
    $(e.target).siblings('.dropdown-menu').css('display', 'block');
    $(e.target).offsetParent().offsetParent().siblings().find('.dropdown-menu').css('display', 'none')
    
  } else {

    $('.dropdown-menu').css('display', 'none');
    $('.dropdown  .fa').removeClass('clicked');
  }

});

//show and hide input date on clicking specific weekday
document.querySelectorAll('.box').forEach(e => {

  const checkBox = e.querySelector('.checkbox')
  
  checkBox.addEventListener('click', function(e) {

    if (e.target.classList.contains('checkbox')) {

      if (e.target.classList.contains('checked')) {

        e.target.classList.remove('checked');
        e.target.parentElement.classList.remove('checked');

      } else {
        //add class to target
        e.target.classList.add('checked');
        e.target.parentElement.classList.add('checked');
      }

    }
    
  })
})

//Give class "selected" to partisipation cards
$('.participation .body').each(function () {
  $(this).click( function() {
    $(this).addClass('selected').parent().siblings().find('.body').removeClass('selected')
  })
});


//Mobile menu top position & height
let headerHeight = document.getElementById('header').clientHeight;
let height = window.innerHeight - headerHeight;

// $('.navbar-collapse').css('height', height);
$('.navbar-collapse').css('top', headerHeight);

//Make header fixed when the menu is open 
$('.navbar-toggler').click(function() {
  if($('header').hasClass('fixed')) {
    if($('#search-modal').hasClass('hide')) {
      $('header').removeClass('fixed');
    }
  } else {$('header').addClass('fixed')}

  //animate the bars
  $(this).toggleClass('clicked')

});


$('.search-target').click(function() {
  if($('header').hasClass('fixed')) {
    if($('.navbar-collapse').hasClass('show')) {
      $('header').addClass('fixed');
    } else {
      {$('header').removeClass('fixed')}
    }
  } else {$('header').addClass('fixed')}
});


//Search modal & mobile menu top postiion on resizing
$(window).resize(function () { 
  let headerHeight = document.getElementById('header').clientHeight;
  let height = window.innerHeight - headerHeight;
  $('#search-modal').css('height', height);
  $('#search-modal').css('top', headerHeight);

  // $('.navbar-collapse').css('height', height);
  $('.navbar-collapse').css('top', headerHeight);

  //Close the hero accoridion on mobile screen
  if($(window).innerWidth() < 992) {
    $('.hero-section #collapseOne').removeClass('show');
    $('.hero-section .card-header  div').addClass('collapsed');
    if($('.registration_tabs .tab[data-show="sign-up"]').hasClass('active') === false) {
      $('.registration .sign-up.target').addClass('d-none')
    }
  } else{
    $('.hero-section #collapseOne').addClass('show')
    $('.hero-section .card-header  div').removeClass('collapsed');
    $('.registration .target').removeClass('d-none');
    $('.registration_tabs .tab[data-show="log-in"]').addClass('active');
    $('.registration_tabs .tab[data-show="sign-up"]').removeClass('active');

  }

 //Move specific boxes to other columns to make the taxonomy view
  if(window.innerWidth >= 767 & window.innerWidth < 1200) {
    $('#content .base-destination .target').each(function(e) {$('.target-destination').append($(this))})
    $('#content .base-destination .target-2').each(function(e) {$('.target-destination-2').append($(this))})
  } else {
    $('#content .target-destination .target').each(function(e) {$('.base-destination').append($(this))})
    $('#content .target-destination-2 .target-2').each(function(e) {$('.base-destination').append($(this))})
  }

});

//show & hide search modal
$('.search-target').click(function () {
  // $('.navbar-collapse').removeClass('show');

  let headerHeight = document.getElementById('header').clientHeight;
  let height = window.innerHeight - headerHeight;

  $(this).blur();

  if($(this).hasClass('to-close-modal')) {
    $('#search-modal').addClass('hide');
    // $('body').css('overflow', 'scroll');
    $('.search-target').removeClass('to-close-modal');
  } else {
    $('#search-modal').removeClass('hide');
    $('#search-modal').css('height', height);
    $('#search-modal').css('top', headerHeight)
    // $('body').css('overflow', 'hidden');
    $('.search-target').addClass('to-close-modal');
  }

})

//Close the search modal

//[ 1 ] when click on "Abbrechen" or "Schließen"
$('.modal-cancel').click(function() {
  $('#search-modal').addClass('hide');
  $('header').toggleClass('fixed');
  // $('body').css('overflow', 'scroll');
  $('.search-target').removeClass('to-close-modal');
})

//[ 2 ] when clcik anywhere on the baackground
document.getElementById('search-modal').addEventListener('click', function(e) {
  if(e.target === this) {
    $('#search-modal').addClass('hide');
  }
})

//Scroll into a section view on click the "Jetzt Kurse entdecken" button
$('.btn').click(function() {
  $('body, html').animate({scrollTop: $(`#${$(this).attr('data-scroll')}`).offset().top}, 500)
})


//Close the hero accoridion on mobile screen
if($(window).innerWidth() < 992) {
  $('.hero-section #collapseOne').removeClass('show');
  $('.hero-section .card-header  div').addClass('collapsed');
}


//Toggle between registration sections
$('.registration_tabs .tab').each(function () {
  //toggle class "active"
  $(this).click(function() {
    $(this).addClass('active').parent().parent().siblings().find('.tab').removeClass('active');

    let x = $(this).attr('data-show');

    $(`.${x}`).removeClass('d-none').parent().siblings().find('.target').addClass('d-none');
  });

})


// Always put this code at the bottom
// <!-- This script code to lock body scroll on ios behind the overlay box-->
(function () {
  var _overlay = document.getElementById('overlay');
  var _clientY = null; // remember Y position on touch start

  _overlay.addEventListener('touchstart', function (event) {
      if (event.targetTouches.length === 1) {
          // detect single touch
          _clientY = event.targetTouches[0].clientY;
      }
  }, false);

  _overlay.addEventListener('touchmove', function (event) {
      if (event.targetTouches.length === 1) {
          // detect single touch
          disableRubberBand(event);
      }
  }, false);

  function disableRubberBand(event) {
      var clientY = event.targetTouches[0].clientY - _clientY;

      if (_overlay.scrollTop === 0 && clientY > 0) {
          // element is at the top of its scroll
          event.preventDefault();
      }

      if (isOverlayTotallyScrolled() && clientY < 0) {
          //element is at the top of its scroll
          event.preventDefault();
      }
  }

  function isOverlayTotallyScrolled() {
      return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
  }
}());
