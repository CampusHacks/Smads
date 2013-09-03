/*global MashupPlatform*/

(function () {

    "use strict";

    // Do a cross domain request
    MashupPlatform.http.makeRequest('http://example.com/path', {
        method: 'GET',
        onSuccess: function (response) {
            // code for the success condition
        },
        onFailure: function (response) {
            // code for the failure condition
        }
    });

    // Register a callback for an input endpoint
    MashupPlatform.wiring.registerCallback('inputendpoint', function () {
        // code for handling incoming data from inputendpoint
    });

})();
