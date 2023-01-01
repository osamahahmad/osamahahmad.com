var connect = require('connect')
var serveStatic = require('serve-static')
var vhost = require('vhost')

var app = connect()

var osamahahmad_com = connect()
osamahahmad_com.use(serveStatic(__dirname + '/osamahahmad.com'))
app.use(vhost('osamahahmad.com', osamahahmad_com))

app.use(serveStatic(__dirname + '/static'))

app.listen(80)