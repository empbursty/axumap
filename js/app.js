require.config({
  paths : {
    jquery : "../bower_components/jquery/dist/jquery",
    app : "app",
    map : "https://api-maps.yandex.ru/2.1/?lang=ru_RU"
  }
})
require(["jquery", "app/contactsMap"],
 function($, contactsMap) {
  $(document).ready(function() {
    //contactsMap.initialize();
    $.getJSON('wherebuy.json', function(data) {

      var topObj = {};
      var rezObj = {};
      var rezArray = [];
      $.each(data, function(i, el) {
        if (rezArray.length) {
          topObj[i] = rezArray;
          rezArray = []; 
        }
        $.each(el, function(j, inel) {
          rezObj = inel;
          rezObj.locality = "CITYNAME";
          rezArray.push(rezObj);
        })
      //console.log(topObj[i]);      
      })
      console.log(topObj);
      return topObj;
    });
  });
});