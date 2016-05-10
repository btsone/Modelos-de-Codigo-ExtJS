var express = require('express');
var app = express();
var fs = require('fs');
var sift = require('sift');
var bodyParser = require('body-parser');
var uuid = require('node-uuid');

app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:1841');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', req.header('Access-Control-Request-Headers'));

    next();
});


// Configuration
var port = process.env.PORT || 3000,
    dataFile = './data.json';


JSON.flatten = function(data) {
    var result = [];
    function recurse (cur, prop) {
        
        for (var i = 0; i < cur.length; i++) {
            if(cur[i].id > 0) {
                result.push(cur[i]);
            }

            if(cur[i].children) {
                recurse(cur[i].children);
            }
        }
    }
    recurse([data]);
    return result;
}


function traverse(o, cb) {
    cb(o);
    for (i in o) {
        if (typeof(o[i])=="object") {
            traverse(o[i], cb);
        }
    }
}

function traverseAndDelete(o, idToDelete) {
    for (i in o) {
        if (typeof(o[i])=="object") {
            if(o[i].id == idToDelete) {
                var idx = o.indexOf(o[i]);

                o.splice(idx, 1);
            } else {
                traverseAndDelete(o[i], idToDelete);
            }
        }
    }
}

app.get('/searchresults', function(req, res) {
    fs.readFile(dataFile, function (err, content) {
        if (err) throw new Error(err);

        var fakabase = JSON.parse(content);

        var flat = JSON.flatten(fakabase);

        console.log(flat);

        res.json(flat);
    });
});

app.delete('/page/:id', function(req, res) {
    fs.readFile(dataFile, function (err, content) {
        if (err) throw new Error(err);

        var fakabase = JSON.parse(content);

        traverseAndDelete(fakabase, req.params.id);

        fs.writeFileSync(dataFile, JSON.stringify(fakabase));

        res.json({ success: true });
    });
});

app.get('/page/root', function (req, res) {
    fs.readFile(dataFile, function (err, content) {
        if (err) throw new Error(err);
        res.type('application/json');
        res.send(content);
    });
});

app.post('/page', function (req, res) {
    fs.readFile(dataFile, function (err, content) {
        var fakabase = JSON.parse(content),
            newRecord = {
                    clientId: req.body.id,
                    id: uuid.v4(),
                    text: req.body.text,
                    body: req.body.body,
                    published: req.body.published,
                    stub: req.body.stub,
                    leaf: true
                };

        traverse(fakabase, function(o) {
            if(o.id == req.body.parentId) {
                o.leaf = false;

                if(!o.children) {
                    o.children = [];
                }

                o.children.unshift(newRecord);
            }
        });

        fs.writeFileSync(dataFile, JSON.stringify(fakabase));

        res.json([newRecord]);
    });
});

app.put('/page/:id', function (req, res) {
    fs.readFile(dataFile, function (err, content) {
        var fakabase = JSON.parse(content);

        traverse(fakabase, function(o) {
            if(o.id == req.params.id) {
                o.text = req.body.text;
            }
        });

        fs.writeFileSync(dataFile, JSON.stringify(fakabase));

        res.json({ success: true });
    });
});


app.get('/page/:id', function (req, res) {
    fs.readFile(dataFile, function (err, content) {
        if (err) throw new Error(err);

        var result;

        traverse(JSON.parse(content), function(o) {
            if(o.id == req.params.id) {
                result = o;
            }
        });

        delete result.children;

        res.json([result]);
    });
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});