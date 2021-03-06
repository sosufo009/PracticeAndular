var express = require('express');
var app = express();
var pg = require('pg');





app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});


app.get('/api/nodes', function (request, response)
{
    pg.connect(process.env.DATABASE_URL, function(err, client, done)
    {
        client.query('SELECT * FROM nodes', function(err, result)
        {
            done();
            // console.log(result);
            response.send(result);
            // if (err)
            // {
            //     console.error(err);
            //     response.send("Error " + err);
            // }
            // else
            // {
            //     response.render('pages/db', {results: result.rows} );
            // }
        });
    });
});

app.post('/api/nodes/:name', function (request, response)
{
    pg.connect(process.env.DATABASE_URL, function(err, client, done)
    {

        client.query('insert into nodes(label,del) values(\''+request.params.name+'\',true);', function(err, result)
        {
            done();
            response.send(result);
        });
    });
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// var io=require('socket.io').listen(app.listen(process.env.PORT || 5000));

// io.sockets.on('connection',function(socket){
//     socket.emit('connected');
// });

