var connect = require('connect')
  , http = require('http');

var app = connect()
  .use(function(req, res, next){
      req.method = "GET"; 
      next();
    //res.end('Hello from Connect!\n');
  })
  .use(connect.favicon())
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(connect.directory('public'))
  .use(connect.cookieParser())
  .use(connect.session({ secret: 'my secret here' }));

var port = process.env.PORT || 5000;

http.createServer(app).listen(port);

