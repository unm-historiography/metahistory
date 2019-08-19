"use strict";

/* ==============================
 * Google Sheets interface
 * ==============================
 */

function getPages(callback) {
  console.log($('#sheetrock').html());
  console.log("starting getPages");
    // The spreadsheet must be either "visible to anyone with the link", or "public on the web".

    //https://docs.google.com/spreadsheets/d/1x-7ms5fDNzW2Ah9AXylV0ERWh4O-YlwVpguptmWlWbU/edit?usp=sharing#gid=0;
    var sheetURL =
    "https://docs.google.com/spreadsheets/d/1yLBM4Aik6yEJ90XET5_GBrZ58gr1Mbjsg-NvyWrj0_8/edit?usp=sharing#gid=0"
    var pages = [];
    $('#sheetrock').sheetrock({
        url: sheetURL,
        query: "select *",
        fetchSize: 0,
        reset: true,
        target: document.getElementById("sheetrock"),
        rowTemplate: function(row) {
            //console.log(row);
            var m = row.cellsArray;
            m.title = m[0];
            m.description = m[2];
            m.filename = m[3];
            m.image = m[4];
            //m.categories = m[4].split(",");
            //console.log(m.contentPages);
            pages.push(m);
            console.log("Row " + row.num + " is OK.");
            return $('<span></span>'); // appease the sheetrock table handler
        },
        callback: function (error, options, response) {
            console.log("Retrieved " + pages.length + " rows.");
            //console.log(error, options, response);

            // when data is done loading, execute supplied callback function
            callback(pages);
        }
    });
}

function createCard(i,page) {

  //loop through supplied slugs to retrieve page title and subtitle
  console.log("about to create card.");

    var filename = page.filename + '.html';
    console.log("processing " + filename);

    var rowString = '<a href="sites/'+filename+'">';
    rowString += '<div class="card">';
    rowString += '<img class="card-img-top" src="sites/images/' + page.image + '" alt="Essay image">';
    rowString += '<div class="card-block">';
    rowString += '<h4 class="card-title">' + page.title + '</h4>';
    rowString += '<p class="card-text">' + page.description + '</p>';
    rowString += '</div></div></a>';
    //rowString += '</div></div>';
    console.log("just made row: " + rowString);
    //console.log($('.map-popup').html());
    $('.cards').append(rowString);
}
