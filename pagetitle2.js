var page = require('webpage').create();
page.onConsoleMessage = function(msg) {
  console.log('Browser: ' + msg);
};
url = "http://graintheory.bigcartel.com";
page.open(url, function(status) {
  page.evaluate(function() {
    console.log("page Title is:" + document.title);
    console.log("test console from browser");
  });
  phantom.exit();
});
