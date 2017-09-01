const express= require('express');
const app = express();

app.set('port', process.env.PORT || 3030);
app.get('/', function(req, res) {
	res.send('hello gulp world');
});

app.listen(3030, () => {
	console.log('express server is listening at localhost: ' + app.get('port'));
});
