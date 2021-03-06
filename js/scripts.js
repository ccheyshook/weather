// YOUR SCRIPTS GO HERE
// http://simpleweatherjs.com/

// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js

//Cheney
$.simpleWeather({
    location: '99004',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
            // Display Data
      $('#cheney .temp').text(weather.temp);
      $('#cheney .city').text(weather.city);
      $('#cheney i').addClass( 'icon-' + weather.code);
      
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
    
      // Display Day 1 Weather
      $('aside figure:nth-child(1) h2').text(weather.forecast[0].day);
      $('aside figure:nth-child(1) i').attr('src', weather.forecast[0].image);
      $('aside figure:nth-child(1) span').text(weather.forecast[0].high);
      $('aside figure:nth-child(1) figcaption').text(weather.forecast[0].text);
      
      // Display Day 2 Weather
      $('aside figure:nth-child(2) h2').text(weather.forecast[1].day);
      $('aside figure:nth-child(2) i').attr('src', weather.forecast[1].image);
      $('aside figure:nth-child(2) span').text(weather.forecast[1].high);
      $('aside figure:nth-child(2) figcaption').text(weather.forecast[1].text);
      
      // Display Day 3 Weather
      $('aside figure:nth-child(3) h2').text(weather.forecast[2].day);
      $('aside figure:nth-child(3) i').attr('src', weather.forecast[2].image);
      $('aside figure:nth-child(3) span').text(weather.forecast[2].high);
      $('aside figure:nth-child(3) figcaption').text(weather.forecast[2].text);
      
      // Display Day 4 Weather
      $('aside figure:nth-child(4) h2').text(weather.forecast[3].day);
      $('aside figure:nth-child(4) i').attr('src', weather.forecast[3].image);
      $('aside figure:nth-child(4) span').text(weather.forecast[3].high);
      $('aside figure:nth-child(4) figcaption').text(weather.forecast[3].text);
      
      // Display Day 5 Weather
      $('aside figure:nth-child(5) h2').text(weather.forecast[4].day);
      $('aside figure:nth-child(5) i').attr('src', weather.forecast[4].i);
      $('aside figure:nth-child(5) span').text(weather.forecast[4].high);
      $('aside figure:nth-child(5) figcaption').text(weather.forecast[4].text);
        
console.log(weather.forecast[0].high)
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Go Look Outside Silly!');
    }
  
  });

//Seattle 
$.simpleWeather({
    location: '98105',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
            // Display Data
      $('#seattle .temp').text(weather.temp);
      $('#seattle .city').text(weather.city);
      $('#seattle i').addClass( 'icon-' + weather.code);
      
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
      
      // Display Day 4 Weather
      $('aside figure:nth-child(4) h2').text(weather.forecast[3].day);
      $('aside figure:nth-child(4) img').attr('src', weather.forecast[3].image);
      $('aside figure:nth-child(4) span').text(weather.forecast[3].high);
      $('aside figure:nth-child(4) figcaption').text(weather.forecast[3].text);
      
      // Display Day 5 Weather
      $('aside figure:nth-child(5) h2').text(weather.forecast[4].day);
      $('aside figure:nth-child(5) img').attr('src', weather.forecast[4].image);
      $('aside figure:nth-child(5) span').text(weather.forecast[4].high);
      $('aside figure:nth-child(5) figcaption').text(weather.forecast[4].text);
  
      console.log(weather.forecast[0].high)
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Go Look Outside Silly!');
    }
  
  });

//Ellensburg
$.simpleWeather({
    location: '98926',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
            // Display Data
      $('#ellensburg .temp').text(weather.temp);
      $('#ellensburg .city').text(weather.city);
      $('#ellensburg i').addClass( 'icon-' + weather.code);
      
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
      
      // Display Day 4 Weather
      $('aside figure:nth-child(4) h2').text(weather.forecast[3].day);
      $('aside figure:nth-child(4) img').attr('src', weather.forecast[3].image);
      $('aside figure:nth-child(4) span').text(weather.forecast[3].high);
      $('aside figure:nth-child(4) figcaption').text(weather.forecast[3].text);
      
      // Display Day 5 Weather
      $('aside figure:nth-child(5) h2').text(weather.forecast[4].day);
      $('aside figure:nth-child(5) img').attr('src', weather.forecast[4].image);
      $('aside figure:nth-child(5) span').text(weather.forecast[4].high);
      $('aside figure:nth-child(5) figcaption').text(weather.forecast[4].text);
      
      
      
      
      console.log(weather.forecast[0].high)
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Go Look Outside Silly!');
    }
  
  });

// call Sidr Plugin. Toggle by Default
$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
})