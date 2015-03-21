var page = require('webpage').create();
page.onResourceRequested = function(request) {
  console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function(response) {
  console.log('Receive ' + JSON.stringify(response, undefined, 4));
};
var url = "http://graintheory.bigcartel.com/product/prospect-mod-kristian-aynedter";
page.open(url);
