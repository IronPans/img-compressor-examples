const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
const app = express();

app.set('port', process.env.PORT || 3031);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/public'));

app.route('/').get((req, res) => {
	res.sendFile(path.resolve(__dirname,'public/index.html'))
});

app.post('/upload', upload.single('file'),(req,res)=>{
    res.jsonp('success');
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use((err, req, res, next) => {
   res.type('text/plain');
   res.status(500);
   res.send('500 - Server Error');
   console.log(err);
});

app.listen(app.get('port'), () => {
   console.log(`connect success in http://localhost:${app.get('port')}`);
});




















