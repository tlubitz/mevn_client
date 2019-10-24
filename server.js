"use strict"
var express = require('express');
var cors = require('cors');
var path = require('path');
var multer = require('multer');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var JSZip = require('jszip');
var fs = require('fs');
var spawn = require('child_process').spawn;
if (typeof localStorage === 'undefined' || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    var localStorage = new LocalStorage('./scratch')
}

const app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));


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


// prepare storage directory of files with multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
	cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
	cb(null, file.originalname.slice(0,-4) + '-' + Date.now() + '.zip');
    }
})


// middleware required for file validation and handling
var upload = multer({
    storage: storage,
    fileFilter,
    limits: {
	fileSize: 5000000
    }
})

app.post('/simulate', (req, res) => {
    // get file
    console.log('SIMULATE AWAY!!');
    console.log(localStorage.getItem('rba_file_path'));

    let zip_path = localStorage.getItem('rba_file_path');
    let dir_path = zip_path.slice(0, zip_path.length-4);

    try {
	fs.readFile(zip_path, function(err, data) {
	    if (err) throw err;
		
	    var zip = new JSZip();
	    zip.loadAsync(data).then(function(contents) {
		Object.keys(contents.files).forEach(function(filename) {

		    console.log(filename);
		    zip.file(filename).async('nodebuffer').then(function(content) {
			//console.log(content);
			//var dest = '/' + dir_path + '/' + filename;
			var dest =  'scratch/' + filename;
			//var dest = filename;
			//console.log(dest);
			fs.writeFileSync(dest, content);
			
		    });
		});
	    });
	});
    }
    catch(err) {
	console.log(err);
    }
    

    /*fs.readFile(zip_path, function(err, data) {
	JSZip.loadAsync(data).then(function(zip) {

	
    
	    //console.log(data); // initial buffer of zip file
	    //console.log(zip);  // single zip files
	    
	    //console.log(zip.files);
	    for (const p in zip.files) {
		//console.log(zip.files[p]);
		//console.log(zip.files[p].name);
		let dir_path = zip_path.slice(0, zip_path.length-4) + '/' + zip.files[p].name;
		console.log(dir_path);
		console.log(zip.files[p])
		    
		// write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
		fs.writeFile(dir_path, zip.files[p], function(err) {
		    
		    if (err) throw 'error writing file: ' + err;
		    fs.close(fd, function() {
			console.log('wrote the file successfully');
		    });
		});
		
		//console.log(zip.files[p]);
		//console.log('2');
	    }
	    // send the data to the python wrapper
	    /*var pythonProcess = spawn('python', ["static/files/python/rba_wrapper.py", ]);
	    pythonProcess.stdout.on('data', function(data) {
		var pp = data.toString('utf8');
		console.log(pp);
	    });
	})
	if (err) {
	    console.log('Cannot load file:', err);
	}
    })*/
    

    
    /*
      JSZip.loadAsync(data).then(function(zip) {
      //for (const p in zip.files) {
      //console.log(zip.files[p]);
      //}
      // send the data to the python wrapper
      var pythonProcess = spawn('python', ["static/files/python/rba_wrapper.py", ]);
      pythonProcess.stdout.on('data', function(data) {
      var pp = data.toString('utf8');
      console.log(pp);
      });
      })
    */
    res.send();

});

app.post('/chooseModel', (req, res) => {
    localStorage.setItem('rba_file_path', req.body.name)
    res.send();
});


app.post('/clear', (req, res) => {
    localStorage.clear();
    res.send();
});

app.get('/getFilename', (req, res) => {
    var path = localStorage.getItem('rba_file_path');
    var filename = path.slice(8, path.length-4);
    res.send(filename);
});

// process the zip file we receive
app.post('/upload', upload.single('file'), (req, res) => {
    fs.readFile(req.file.path, function(err, data) {
	localStorage.setItem('rba_file_path', req.file.path)
	if (err) throw err;
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
