function Place(name, location, weather) {
  this.name = name;
  this.location = location;
  this.weather = weather;
}

Place.prototype.fullName = function() {
  return this.name;
}

$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();

  var inputtedName = $("input#new-name").val();
  var inputtedLocation = $("input#new-location").val();
  var inputtedWeather = $("input#new-weather").val();

  var newPlace = new Place(inputtedName, inputtedLocation, inputtedWeather);

  $("ul#places").append("<li><span class='place'>" + newPlace.fullName() + "</span></li>");


  $(".place").last().click(function() {
    $("#show-place").show();
    $("#show-place h2").text(newPlace.name);
    $(".name").text(newPlace.name);
    $(".location").text(newPlace.location);
    $(".weather").text(newPlace.weather);
  });

  $("input#new-name").val("");
  $("input#new-location").val("");
  $("#input#new-weather").val("");
  });
});
