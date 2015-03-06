var express = require('express');

var app = express();
var port = 3000;

app.get('/name/:user_name', function(req, res) {
	res.status(200);
	res.set('Content-type', 'text/html');
	res.send('<html><body>' +
		'<h1>Hello ' + req.params.user_name + '</h1>' +
		'</body></html>'
	);
});

app.get('*', function(request, response) {
	response.end('Hello World');
});

app.listen(port, function() {
	console.log('Server running on %s', port);
});