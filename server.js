// Require all the needed dependencies
var express = require('express')
var logger = require('morgan')
var app = express()
// Compiles the Jade template
var template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')

// Adds Logger and Express middleware
app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

// Route: Homepage
app.get('/', function(req, res, next) {
    try{
        var html = template({ title: 'Home'})
        res.send(html)
    }
    catch (e) {
        next(e)
    }
})

// Bind requests to specified port
app.listen(process.env.PORT || 3000, function() {
    console.log('Properly listening to requests on http://localhost:' + (process.env.PORT || 3000))
})