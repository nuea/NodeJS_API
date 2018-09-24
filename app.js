var express = require("express");
var app = express();

var request = require('request');
app.get('/api', function(req, res){
    request(
        {
            headers: {
                'X-Access': 'nuea',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            uri: 'http://35.240.155.130:8810/api/v1/',
        }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            //console.log(body);
            res.send(info);
        }
    })
});

app.listen(8080, () => {
    console.log("Server running on http://localhost:8080/");
});
