var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)
var bodyParser = require("body-parser")

var port = 3000 || process.env.PORT
var host = "localhost"

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var db = require("./configDB")

var pessoaController = require("./controllers/pessoa.controller")

db.init().then(odm=>{

	pessoaController.init(odm)

    io.on("connection", socket=>{
		pessoaController.run(socket, io)
    })

    http.listen(port, host, ()=>{
        console.log(`servidor conectado http://${host}:${port}`)
    })

}).catch(err=>{
    console.error(err)
})