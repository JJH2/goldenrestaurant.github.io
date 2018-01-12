    let myKey = 'AIzaSyAxf8wMrEYOOeQXD4F_WDtv-f_gReSlorg';
    var map;
    var locations = [
      ['Jungfrau, Switzerland', 46.536619, 7.962668, 4],
      ['Mattehorn, Switzerland', 45.9764232, 7.6584592, 5],
      ['Rigi, Switzerland', 47.0557012, 8.4838056, 3],
      ['Bern, Switzerland', 46.9512028, 7.4599713, 2],
      ['Zurich, Switzerland', 47.3497089, 8.491519, 1],
      ['Montreux, Switzerland', 46.4286015, 6.9147169, 6]
    ];

    function initMap() {

      map = new google.maps.Map(document.getElementById('googleMap__map'), {
        center: {
          lat: 46.897574,
          lng: 8.190485
        },
        zoom: 7

      });

      var infowindow = new google.maps.InfoWindow();

      var marker, i;

      for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
          position: {
            lat: locations[i][1],
            lng: locations[i][2],
          },
          map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            var panorama = new google.maps.StreetViewPanorama(
              document.getElementById('googleMap__imgList'), {
                position: {
                  lat: locations[i][1],
                  lng: locations[i][2],
                },
                pov: {
                  heading: 34,
                  pitch: 10
                }
              });
            map.setStreetView(panorama);
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    }