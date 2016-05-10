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

var port = process.env.PORT || 3000;

var getRandom = function() {
    return Math.floor(Math.random() * 15) + 5;
}

var getPercentageParts = function(numberOfParts) {
    var parts = [];
    for(var i = 0; i < numberOfParts; i++) {
        parts[i] = Math.floor(Math.random() * 50);
    }

    return parts;
}

var getPart = function(parts, i) {
    var sum = parts.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    });

    return (parts[i] / sum) * 100;
};

app.get('/logStream', function(req, res) {
    var filters = JSON.parse(req.query.filter),
        type = filters.filter(function(f) { return f.property === 'type'; })[0];

    if(type === 'web') {
        res.json([
            { type: 'web', subType: 'request', message: '', time: (new Date()).toISOString(), value: getRandom().toString() }
        ]);
    } else {
        res.json([
            { type: 'sql', subType: 'request', message: '', time: (new Date()).toISOString(), value: getRandom().toString() }
        ]);
    }
});

app.get('/statistic', function(req, res) {
    var data = [],
        filters = JSON.parse(req.query.filter),
        category = filters.filter(function(f) { return f.property === 'category'; })[0],
        percents;

    switch(category.value) {
        case 'device':
            data.push({ category: 'device', label: 'Desktop' });
            data.push({ category: 'device', label: 'Mobile' });
            data.push({ category: 'device', label: 'Tablet' });
            percents = getPercentageParts(3);
            break;
        case 'location':
            data.push({ category: 'location', label: 'Other' });
            data.push({ category: 'location', label: 'UK' });
            data.push({ category: 'location', label: 'USA' });
            data.push({ category: 'location', label: 'Mexico' });
            data.push({ category: 'location', label: 'France' });
            percents = getPercentageParts(5);
            break;
        default:
            data.push({ category: 'browser', label: 'Chrome' });
            data.push({ category: 'browser', label: 'IE' });
            percents = getPercentageParts(2);
    };

    data.forEach(function(d, i) {
        d.percentage = getPart(percents, i);
    });  

    res.json(data);
});

app.get('/logEntry', function(req, res) {
    var filter = req.query.filter,
        now = new Date(),
        start = new Date(now.setMonth(now.getMonth() - 1)),
        end = new Date(),
        data = [];

    for(var i = start; i <= end; i.setDate(i.getDate() + 1)) {
        data.push({ type: 'web', time: i.toISOString(), subType: 'request', value: getRandom().toString() });
    }

    res.json(data);
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
