// YOUR SCRIPTS GO HERE
// http://simpleweatherjs.com/

// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js

$.simpleWeather({
    location: 'seattle',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('i').addClass( 'icon-' + weather.code );
      
      // Get Condition Code
      if ( weather.code >= 30 && weather.code <= 36 ) {
         $('body').addClass('sunny');   
      }
      
      // Get Condition Code
      if ( weather.code >= 23 && weather.code <= 29 ) {
         $('body').addClass('cloudy');   
      }
      
      // Get Condition Code
      if ( weather.code >= 30 && weather.code <= 36 ) {
         $('body').addClass('sunny');   
      }
      
    },
      
      // Display Current 
      $('.city').text(weather.city);
      $('.temp').text(weather.temp);
    
      // Display Day 1 Weather
      $('aside figure:nth-child(1) h2').text(weather.forecast[0].day);
      $('aside figure:nth-child(1) img').attr('src', weather.forecast[0].image);
      $('aside figure:nth-child(1) span').text(weather.forecast[0].high);
      $('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text);
      
      // Display Day 2 Weather
      $('aside figure:nth-child(2) h2').text(weather.forecast[1].day);
      $('aside figure:nth-child(2) img').attr('src', weather.forecast[1].image);
      $('aside figure:nth-child(2) span').text(weather.forecast[1].high);
      $('aside figure:nth-child(2) figcaption').text(weather.forecast[1].text);
      
      // Display Day 3 Weather
      $('aside figure:nth-child(3) h2').text(weather.forecast[2].day);
      $('aside figure:nth-child(3) img').attr('src', weather.forecast[2].image);
      $('aside figure:nth-child(3) span').text(weather.forecast[2].high);
      $('aside figure:nth-child(3) figcaption').text(weather.forecast[2].text);
      
      console.log(weather.forecast[0].high)
      
    },
  
  });

    //Sidr
$('#sidr-show-hide').sidr();

$('#close').sidr({
  method: 'close'
  
});