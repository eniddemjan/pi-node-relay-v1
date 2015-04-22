// Requires
var express = require('express');
var path = require('path');
var querystring = require("querystring");
var url = require('url');
var gpio = require('pi-gpio');

// Create app
var app = express();
var port = 3700;

// Set views
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// Serve files
app.get('/interface', function(request, response){
  response.sendfile('views/interface.html')
});

// Send commands to PI
app.get("/send", function(request, response){
    
    // Get data
    var queryData = url.parse(request.url, true).query;
    console.log("State " + queryData.state + " received.");

    // Apply command
    if (queryData.state == 'ona') {
      gpio.open(7, "output", function(err) {     
        gpio.write(7, 1, function() {  
            gpio.close(7);                   
        });
    });
    }
    if (queryData.state == 'offa') {
    gpio.open(7, "output", function(err) {     
        gpio.write(7, 0, function() {  
            gpio.close(7);                   
        });
    });
    } 
    
       if (queryData.state == 'onb') {
      gpio.open(11, "output", function(err) {     
        gpio.write(11, 1, function() {  
            gpio.close(11);                   
        });
    });
    }
    if (queryData.state == 'offb') {
    gpio.open(11, "output", function(err) {     
        gpio.write(11, 0, function() {  
            gpio.close(11);                   
        });
    });
    }
    
       if (queryData.state == 'onc') {
      gpio.open(12, "output", function(err) {     
        gpio.write(12, 1, function() {  
            gpio.close(12);                   
        });
    });
    }
    if (queryData.state == 'offc') {
    gpio.open(12, "output", function(err) {     
        gpio.write(12, 0, function() {  
            gpio.close(12);                   
        });
    });
    }
    
    // Answer
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end();
});

// Start server
app.listen(port);
console.log("Listening on port " + port);
