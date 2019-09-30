"use strict"
var express = require('express');
var cors = require('cors');
var path = require('path');
var multer = require('multer');
var serveStatic = require('serve-static');
var JSZip = require('jszip');
var fs = require('fs');


const app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(cors());

// verify if the file is a zip
const fileFilter = (req, file, cb) => {
    const allowedTypes = ["application/zip"];
    if (!allowedTypes.includes(file.mimetype)) {
	const error = new Error('Incorrect file');
	error.code = "INCORRECT_FILETYPE";
	return cb(error, false)
    }
    cb(null, true);
}


// middleware required for file validation and handling
const upload = multer({
    dest: './uploads',
    fileFilter,
    limits: {
	fileSize: 5000000
    }
});


// process the zip file we receive
app.post('/upload', upload.single('file'), (req, res) => {
    fs.readFile(req.file.path, function(err, data) {
	if (err) throw err;
	JSZip.loadAsync(data).then(function(zip) {
	    for (const p in zip.files) {
		console.log(zip.files[p]);
	    }
	})
    })
    res.json({ file: req.file });
});


// middleware to catch a potential incorrect filetype error
app.use((err, req, res, next) => {
    if (err.code === "INCORRECT_FILETYPE") {
	res.status(422).json({error: 'Please only upload zip files.'});
	return;
    }
    if (err.code === "LIMIT_FILE_SIZE") {
	res.status(422).json({ error: 'Maximum file size is 5MB'});
	return;
    }
});


var port = process.env.PORT || 8080;
app.listen(port);
console.log('server started '+ port);
