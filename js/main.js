var c=
		$("#arrow").click(function(){
			$('html, body').animate({
    scrollTop: $("#home").offset().top
 }, 1000);
});

$("#tab2").click(function(){
			$('html, body').animate({
    scrollTop: $("#about").offset().top
 }, 1000);
});

$("#tab3").click(function(){
			$('html, body').animate({
    scrollTop: $("#product").offset().top
 }, 1000);
});

$("#tab4").click(function(){
			$('html, body').animate({
    scrollTop: $("#contact").offset().top
 }, 1000);
});

var myCenter=new google.maps.LatLng(26.873828, 80.980408);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:17,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);




$(document).ready(c);
	 
