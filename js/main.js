"use strict";

/* ==============================
 * Google Sheets interface
 * ==============================
 */

// Sheetrock expects to be outputting HTML for each row, so here's a place to put it.
$('<div id="sheetrock"></div>').appendTo(document.body).hide();

function getMarkersByDateRange(year, callback) {
    // The spreadsheet must be either "visible to anyone with the link", or "public on the web".
    var sheetURL = "https://docs.google.com/spreadsheets/d/19umgdQQIIk2xKPYQJzRQROd3ofSQFBfIGX3C6bWhokg/edit?usp=sharing#gid=0";
    var markers = [];
    $('#sheetrock').sheetrock({
        url: sheetURL,
        query: "select * where C <= " + year + " and D >= " + year,
        labels: ["id", "name", "start_date", "end_date", "geometry",
        "images", "links"],
        fetchSize: 0,
        reset: true,
        target: document.getElementById("sheetrock"),
        rowTemplate: function(row) {
            console.log(row);
            var m = row.cellsArray;
            m.start_year = m[2];
            m.end_year = m[3]
            m.name = m[1];
            m.images = m[4];
            m.links = m[5];
            m.geometry = m[6];
            // outline should be a javascript array in a string, so
            // this turns it back into an array
            try {
                m.geometry = JSON.parse(m.geometry);
                if (!(m.geometry instanceof Array)) {
                    throw "";
                }
                /*
                if (m.outline.length == 2 && typeof (m.outline[0]) == "number") {
                    // The outline is actually just a position, for placing a marker.
                    m.position = m.outline;
                    delete m.outline;
                }
                */
                console.log("converted: " + m.geometry[0])
            } catch (e) {
                console.log("There is a problem with the outline for row " + (row.num + 1) + "!");
                console.log(m.geometry);
                console.log(e);
                return;
            }
            //m.images = [m.image1, m.image2, m.image3, m.image4, m.image5];
            //m.images = [m.F, m.G, m.H, m.I, m.J];
            // remove empty values from images
            m.images = $.grep(m.images, function(x) {
                return x;
            });
            if (m.images.length == 0)
                delete m.images;
            markers.push(m);
            console.log("Row " + (row.num + 1) + " is OK.");
            return $('<span></span>'); // appease the sheetrock table handler
        },
        callback: function (error, options, response) {
            console.log("Retrieved a total of " + markers.length + " markers.");
            console.log(error, options, response);

            // when data is done loading, execute supplied callback function
            callback(markers);
        }
    });
}

// initialize image sliders in popups
map.on('popupopen', function(e) {
    var slider = $(e.popup._contentNode).children('.image-slider');
    if (slider.children('li').length > 1) {
        slider.bxSlider({
            responsive: false,
            //        adaptiveHeight: true,
            controls: false
        });
    }
});

// clear all building highlights when a popup closes
map.on('popupclose', function() {
    //featureGroup.setStyle({
    //    fillOpacity: 0
    //});
});

/*
// load year data, completing map setup
$.ajax({
    dataType: 'json',
    url: 'markers.json',
    success: function(data) {
        loadYears(data, '1854'); // 1854 is the default
        if (typeof window.editMode == "function" && !navigator.userAgent.match(/iPad/i))
            editMode();
    },
    error: function(data) {
        alert("An error occurred when loading the map markers. Check the json syntax, or try reloading the page.");
    }
});
*/

/* =========================
 * Year setup
 * =========================
 */

/*
    // when the year is changed, re-center the map and load markers
    map.on('baselayerchange', function(e) {
        var options = e.layer.options;

        // jump to new center/zoom
        map.fitBounds(options.bounds, {
            animate: false,
            padding: [80, 10]
        });
        //map.setMaxBounds(options.bounds);

        // load markers using google sheets interface, and execute anonymous function as callback
        getMarkersByDateRange(options.year, function(markers) {
            // clear away old markers
            featureGroup.clearLayers();
            // and add the markers for this year
            $.each(markers, loadMarker);
        });

        // illuminate all buildings to hint at what to click on
        highlightBuildings();
    });
*/

map.on('drag', highlightBuildings);
map.on('zoomstart', highlightBuildings);

var hl_timeout;
function highlightBuildings() {
    $('#map').addClass('hl-hint');
    clearTimeout(hl_timeout);
    hl_timeout = setTimeout(function() {
        $('#map').removeClass('hl-hint');
    }, 1000);
}

function loadMarker(i, markerData) {
  var geojsonFeature = {
      "type": "Feature",
      "properties": {
          "name": markerData.name,
          "popupContent": "This is where the Rockies play!"
      },
      "geometry": {
          "type": "Polygon",
          "coordinates": markerData.geometry
      }
  };

  console.log(geojsonFeature);

  // assemble the popup!
  console.log("assembling popup...");
  var popup = $('<div></div>');
  if (markerData.name) {
      $('<h2></h2>')
      .text(markerData.name)
      .appendTo(popup);
  }
  if (markerData.image || markerData.images) {
      // image carousel
      var images = markerData.images || [markerData.image];
      var slider = $('<ul></ul>')
      .addClass('image-slider')
      .appendTo(popup);
      $.each(images, function(i, url) {
          $('<img>')
          .attr('src', url)
          .appendTo($('<li></li>').appendTo(slider));
      });
  }
  if (markerData.caption) {
      $('<p></p>')
      .text(markerData.caption)
      .appendTo(popup);
  }
  if (markerData.link) {
      $('<a></a>')
      .addClass('read-more')
      .attr('href', markerData.link)
      .attr('target', '_blank')
      .text("More information »")
      .appendTo($('<p></p>').appendTo(popup));
  }
  console.log(popup.html());

  var popup = L.popup().setContent(popup.html());
  //outlines.addLayer(L.geoJSON(geojsonFeature).bindPopup(popup).on('click', function(e) {
  outlines.addLayer(L.geoJSON(geojsonFeature).on('click', function(e) {
    console.log(e.layer.feature.properties.name);
    //$("#info_name").html(e.layer.feature.properties.name);
    $( "#info_blurb" ).load( "blurbs/test.html", function() {
      //alert( "Load was performed." );
    });
  }));
} //end function

getMarkersByDateRange(year, function(markers) {
    // clear away old markers
    outlines.clearLayers();
    // and add the markers for this year
    $.each(markers, loadMarker);
    console.log(outlines);
    map.addLayer(outlines);
  }
);
