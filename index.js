var express = require('express')
var vhost = require('vhost')

var app = express()

var osamahahmad_com = express()
osamahahmad_com.use(express.static(__dirname + '/osamahahmad.com'))
app.use(vhost('osamahahmad.com', osamahahmad_com))

app.use(express.static(__dirname + '/static'))

app.listen(80)