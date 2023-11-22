// Lookbook indexing
$(document).ready(function() {
  // Get all image elements on the page
  var images = $(".lookbook-image");

  // Count the number of image elements
  var imageCount = images.length;

  // Create an array to store the image numbers
  var imageNumbers = [];

  // Iterate over the image elements and add the current number to the array
  for (var i = 0; i < images.length; i++) {
    imageNumbers.push(i + 1);
    
    // Create a new div element
    var div = $("<div>");

    // Add the image number to the div element
    div.html(imageNumbers[i] + "&nbsp;&nbsp;&nbsp;" + imageCount);

    // Add the class "image-number" to the div element
    div.addClass("lookbook-image-index");

    // Append the div element next to the corresponding image
    $(images[i]).parent().append(div);
    console.log("Index appended" + " " + imageNumbers[i])
  }
 
});

// Video Indexing
$(document).ready(function() {
  // Hide the collections
  // $('.video-filtered').hide();
  $('.video').hide();

  // Capture info
  var videoCount = $('.video').length;
      
  // Assign info
  $('.film-count').html(videoCount);
});



// Open/Close Nav
$(document).ready(function(){
  $('.open-nav').click('click', function(){
    $("body").css('overflow', 'hidden');
  });
  $('.close-nav').click('click', function(){
    $("body").css('overflow', 'auto');
  });
});

// Open/Close Size Chart
  $(document).ready(function(){
    $('.product-details__size-chart').click('click', function(){
      $("body").css('overflow', 'hidden');
    });
    $('.size-chart-close').click('click', function(){
      $("body").css('overflow', 'auto');
    });
});

// Open/Close Cart Overlay
$(document).ready(function(){
  $('.bag').click('click', function(){
    $('.logo').fadeOut(500);
    $("body").css('overflow', 'hidden');
  });
  $('.close-cart').click('click', function(){
    $('.logo').fadeIn(500);
    $("body").css('overflow', 'auto');
  });
})
$(document).ready(function(){
  $('.return-to-cart-link').click('click', function(){
    $('.logo').fadeOut(500);
    $("body").css('overflow', 'hidden');
  });
  $('.close-cart').click('click', function(){
    $('.logo').fadeIn(500);
    $("body").css('overflow', 'auto');
  });
})
