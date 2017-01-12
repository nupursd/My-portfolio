
function startApp() {
// Initiating Google Maps
var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 13,
    center: new google.maps.LatLng(37.775260, -122.431194),
    disableDefaultUI: true
});

var infoWindow = new google.maps.InfoWindow({ content: "contentString" });

// mapMarker object to hold information about a map point.
function mapMarker(name, type, lat, long, show, venueId) {
    'use strict';
    var self = this;
    self.name = name;
    self.type = type;
    self.show = ko.observable(show);
    self.venueId = venueId;
    self.lat = ko.observable(lat);
    self.long = ko.observable(long);
    self.latLng = new google.maps.LatLng(lat, long);

    self.marker = new google.maps.Marker({
        position: self.latLng,
        title: name,
        map: map,
        draggable: false
    });

    /*** Shows a Bouncing animation when the marker is clicked ***/

    self.openInfoWindow = function(){
        // Create the new info window and populate with information
        infoWindow.setContent("<div id='content'></div>");
        infoWindow.open(map,self.marker);
        self.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){self.marker.setAnimation(null);}, 1400);
        // Writes data into info window.
        getInfoWindowContent(self.marker);
    };
    google.maps.event.addListener(self.marker, 'click', self.openInfoWindow);

    self.updateShow = function(show){
        self.show(show);
        if(show){
            // self.marker.setMap( map );
            self.marker.setVisible(true);
        }else{
            // self.marker.setMap( null );
            self.marker.setVisible(false);
            }
    };


    // Begin JSON request
    function getInfoWindowContent(){
        // var $infoWindowContent = $('#content');
        // var $infoWindowContent = infoWindow.setContent();
        var fourSquareUrl = 'https://api.foursquare.com/v2/venues/'+ venueId+
        '?client_id=XKVOFWGXXGYN0A2VUP3EZS1AILPGFW3PUEG1LDQVKKSNWZGE'+
        '&client_secret=VXY2XQTDWT4VJF2DR4FR2YT5TYZJOURCFGPWD1NR4OZZL5IZ'+
        '&v=20130815';
            $.getJSON(fourSquareUrl, function(response) {
            var venue = response.response.venue;
            var venueName = venue.name;
            var address = venue.location.formattedAddress;
            var phone = venue.contact.formattedPhone;
            var website = venue.url;

            var contentString = "";

            venueName ? venueName= (contentString += '<p>' + venueName + '</p>') : (contentString+='<p> Unable to find location name </p>');
            address ? address= (contentString += '<p>' + address + '</p>') : (contentString+='<p> Address unlisted </p>');
            phone ? phone= (contentString += '<p>' + phone + '</p>') : (contentString+='<p> Phone number unlisted </p>');
            website ? website= (contentString += '<p>' + website + '</p>') : (contentString+='<p> Website unlisted </p>');

            infoWindow.setContent(contentString);
        }).error(function(e) {
            infoWindow.setContent('Sorry!! There was an error loading data from Foursquare!');
        });
    }
}


function mapViewModel() {
    'use strict';
    var self = this;
    // array of all locations
    self.mapMarkers = ko.observableArray([
        new mapMarker('Golden Gate Bridge', 'Entertainment', 37.820068, -122.478260, true, '49d01698f964a520fd5a1fe3'),
        new mapMarker('Treasure Island', 'Entertainment', 37.817272, -122.370942, true,'4495432ef964a52083341fe3'),
        new mapMarker('Ghirardelli Square', 'Restaurant', 37.806207, -122.422972 , true, '4b819f25f964a5204ab330e3'),
        new mapMarker('Fort Mason', 'Entertainment', 37.806807, -122.431490, true , '4bae72d5f964a520bdb33be3'),
        new mapMarker('Fishermans Wharf', 'Entertainment', 37.808766, -122.409542, true, '55f37412498ecab71c7a110c'),
        new mapMarker('Lombard Street', 'Entertainment', 37.802375, -122.418743, true, '49f62829f964a520136c1fe3'),
        new mapMarker('Madame Tussauds Museum', 'Entertainment', 37.808421, -122.414856, true, '53ac5810498e34cf127e72af'),
        new mapMarker('Alcaraz Island', 'Park', 37.834522, -122.422109, true, '4451c80ef964a520a5321fe3'),
        new mapMarker('AT&T Park', 'Park', 37.778824, -122.389313, true, '4bd2177d046076b055357371'),
        new mapMarker('SF Museum of Modern Art', 'Entertainment', 37.785769, -122.400815, true, '40943a00f964a520e5f21ee3'),
        new mapMarker('SF-Oakland Bay Bridge', 'Entertainment', 37.798534, -122.377872, true, '4ef224f0c512c31f1a68ddea'),
        ]);

    self.filterText = ko.observable('');

    self.listClick = function(mapMarker) {
        mapMarker.openInfoWindow();
    };

    self.filtermapMarkers = ko.computed(function() {
        var filterTextClean = self.filterText().toLowerCase();

        for (var i=0; i < self.mapMarkers().length; i++) {
            if(self.mapMarkers()[i].name.toLowerCase().indexOf(filterTextClean) !== -1){
                self.mapMarkers()[i].updateShow(true);
            }else{
                self.mapMarkers()[i].updateShow(false);
            }
        }
    }, mapViewModel);
}


    ko.applyBindings(new mapViewModel());
}

function googleError() {
    alert("Google Maps has failed to load. Please check your internet connection and try again.");
}


