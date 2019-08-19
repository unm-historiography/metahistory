"use strict";

/* ==============================
 * Google Sheets interface
 * ==============================
 */

function getMarkers(callback) {
  console.log($('#sheetrock').html());
  console.log("starting getMarkers");
    // The spreadsheet must be either "visible to anyone with the link", or "public on the web".

    var sheetURL = "https://docs.google.com/spreadsheets/d/1yLBM4Aik6yEJ90XET5_GBrZ58gr1Mbjsg-NvyWrj0_8/edit?usp=sharing#gid=0";

    var markers = [];
    $('#sheetrock').sheetrock({
        url: sheetURL,
        query: "select *",
        fetchSize: 0,
        reset: true,
        target: document.getElementById("sheetrock"),
        rowTemplate: function(row) {
            //console.log(row);
            var m = row.cellsArray;
            m.name = m[0];
            m.teaser = m[1];
            m.kmlFile = m[3]; // using essay-slug to encourage consistency
            m.contentPages = m[3].split(",");
            console.log(m.contentPages);
            markers.push(m);
            console.log("Row " + row.num + " is OK.");
            return $('<span></span>'); // appease the sheetrock table handler
        },
        callback: function (error, options, response) {
            console.log("Retrieved " + markers.length + " rows.");
            //console.log(error, options, response);

            // when data is done loading, execute supplied callback function
            callback(markers);
        }
    });
}

function createPopupRows(pages) {

  //loop through supplied slugs to retrieve page title and subtitle
  console.log("about to begin page loop.");

  $.each(pages, function(i,val) {
    var filename = 'sites/' + val + '.html';
    console.log("processing " + filename);

    var $div = $('<div>');
    var temp = i;

    // format for spreadsheet (and lesson on separators)
    // title;blurb;link|title;blurb;link|etc

    $div.load(filename + '', function($row){
      console.log("finished loading page content.");
      console.log("index at callback" + temp);
      var title = $(this).find("h1:first").text();
      // try to get from jumbotron; if blank use h2
      var subtitle = $(this).find("#page-subtitle").text();
      if (!subtitle) subtitle = $(this).find("h2:first").text();
      var image = $(this).find("img:first").attr('src');
      console.log(image);
      image = image.replace("images/", "essays/images/"); //  use thumbs path instead
      var rowString = '<a href='+filename+'><div class="popup-row">';
      rowString += '<img src="' + image + '">';
      rowString += '<h4>' + title + '</h4>';
      rowString += '<p>' + subtitle + '</p>';
      rowString += '<div style="clear:both"></div></div></a>';
      console.log("just made row: " + rowString);
      console.log($('.map-popup').html());
      $('.map-popup').append(rowString);
    });
  }); // end each
}

function loadMarker(i, markerData) {
  console.log("loadMarker...");
  var slug = markerData.kmlFile;
  var filename = "kml/" + slug + ".kml";
  var geojsonFeature = {};

  console.log("about to get KML file");

  $.ajax(filename).done(function(xml) {
    console.log("KML file loaded.");
    geojsonFeature = toGeoJSON.kml(xml);

    var popup = '<div class="map-popup">';
    popup += "<h4>" + markerData.name + "</h4>";
    popup += '<p>' + markerData.teaser + '</p>';
    popup += '</div></a>';

    //console.log(popup);
    var popup = L.responsivePopup().setContent(popup);
    featureGroup.addLayer(L.geoJSON(geojsonFeature).bindPopup(popup, {
    maxWidth : 560}).on('click', function(e) {
      //console.log(e.layer.feature.properties.name);
      //should i make the popup here?
      $.when( createPopupRows(markerData.contentPages) ).then(function( ) {
        console.log("createPopupRows is done."); // Alerts 200
      });
      //createPopupRows(markerData.contentPages, rowString);
      console.log("moved past createPopupRows call.");

    }));

  }); //end ajax
} //end loadMarker
