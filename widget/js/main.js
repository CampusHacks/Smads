/*global MashupPlatform*/

(function () {

    "use strict";

    var host = "";
    
    Services.get("https://raw.github.com/tapquo/Lungo.js/master/package.json", {}, function(obj){
        console.log(obj);
    });

})();
