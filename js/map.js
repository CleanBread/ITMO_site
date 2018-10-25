function initMap() {
	var centerLatLng = new google.maps.LatLng(59.957384, 30.308180);
	var mapOptions = {
		center: centerLatLng,
		zoom: 15
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
google.maps.event.addDomListener(window, "load", initMap);
