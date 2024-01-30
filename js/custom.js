// Aos_animation
AOS.init();

// Slick_slider

$('.banner-slider').slick({
  dots: false,
  infinite: true,
  speed: 800,
  fade: true,
  autoplay: true,
  arrows:false,
  cssEase: 'linear'
});

$('.review-slider').slick({
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: false,
  arrows:true,
  cssEase: 'linear'
});

// 
$(document).ready(function () {
  $('.hero_content').addClass("text_animate");
});

//
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  //>=, not <=
  if (scroll >= 300) {
    //clearHeader, not clearheader - caps H
    $("header").addClass("sticky_header");
  } else {
    $("header").removeClass("sticky_header");
  }
}); //missing ); 

$(document).ready(function(){
  $('.ScrollTop').click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
  return false;
    });
});


$(document).ready(function(){
  
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    
    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
    }
    else {
        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);
    
  });
  
  
});


function responseMessage(msg) {
  $('.success-box').fadeIn(200);  
  $('.success-box div.text-message').html("<span>" + msg + "</span>");
}
