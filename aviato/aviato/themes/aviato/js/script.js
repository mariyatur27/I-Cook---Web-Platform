// Category search function
function search(input) {
  var article_names = document.getElementsByClassName("post-title");
  var posts = document.getElementsByClassName("post");
  for (var i = 0; i < article_names.length; i++) {
    if (!article_names[i].innerHTML.toLowerCase().includes(input)) {
			posts[i].style.display = "none";
		}else{
			posts[i].style.display = "block";
		}
  }  
}

// Button category function
var buttons = document.getElementsByClassName("btn1");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var category_list = [];
    var names_list = [];
    var categories = document.getElementsByClassName("tag");
    for (var i = 0; i < categories.length; i++) {
      category_list.push(categories[i].innerHTML.toLowerCase().split(" "));
    }
    // Making a dictionary out of article names and categories
    var names = document.getElementsByClassName("post-title");
    for (var i = 0; i < document.getElementsByClassName("post-title").length; i++){
      names_list.push(names[i].innerHTML.toLowerCase());
    }
    var dict = {};
    names_list.forEach((key, i) => dict[key] = category_list[i]);
    console.log(dict);
  })
}

(function ($) {
  'use strict';

  // Preloader
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

  
  // Instagram Feed
  if (($('#instafeed').length) !== 0) {
    var accessToken = $('#instafeed').attr('data-accessToken');
    var userFeed = new Instafeed({
      get: 'user',
      resolution: 'low_resolution',
      accessToken: accessToken,
      template: '<a href="{{link}}"><img src="{{image}}" alt="instagram-image"></a>'
    });
    userFeed.run();
  }

  setTimeout(function () {
    $('.instagram-slider').slick({
      dots: false,
      speed: 300,
      // autoplay: true,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  }, 1500);


  // e-commerce touchspin
  $('input[name=\'product-quantity\']').TouchSpin();


  // Video Lightbox
  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


  // Count Down JS
  $('#simple-timer').syotimer({
    year: 2022,
    month: 5,
    day: 9,
    hour: 20,
    minute: 30
  });

  //Hero Slider
  $('.hero-slider').slick({
    // autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'heroSliderArrow prevArrow tf-ion-chevron-left\'></button>',
    nextArrow: '<button type=\'button\' class=\'heroSliderArrow nextArrow tf-ion-chevron-right\'></button>',
    dots: true,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  $('.hero-slider').slickAnimation();


})(jQuery);
