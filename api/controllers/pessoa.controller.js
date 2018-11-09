var service = require("../services/pessoa.service")

exports.init = function (odm) {
    service.init(odm)
}

exports.run = function(io, broadcast){
    io.on("add", data=>{
        //console.log(`add ${data}`)
        service.add(data).then(result => {
            broadcast.emit("add", result)
            service.list().then((result) => {
                broadcast.emit("list", result)
            }).catch(err => {
                console.log(err)
            })
        }).catch((err) => {
            console.log(err)
        })
    })

    io.on("list", data=>{
        service.list().then((result) => {
            broadcast.emit("list", result)
        }).catch(err => {
            console.log(err)
        })
    })

    io.on("get", data=>{
        console.log(`get ${data}`)
    })

    io.on("delete", data=>{
        var key = data.key || undefined
        service.delete(key).then(result => {
            broadcast.emit("delete", result)
            service.list().then((result) => {
                broadcast.emit("list", result)
            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
            console.log(err)
        })
    })

    io.on("update", data=>{
        console.log(`update ${data}`)
    })

    io.on("select", data=>{
        console.log(`select ${data}`)
    })
}

/*
exports.add = function (req, res) {
    var body = req.body || undefined

    if (body != undefined) {
        service.add(body).then(result => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        })
    }
    else {
        res.end()
    }
}

exports.list = function (req, res) {
    service.list().then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
}

exports.get = function (req, res) {
    var key = req.params.key || undefined
    if (key != undefined) {
        service.get(key).then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    }
    else {
        res.end()
    }
}

exports.delete = function (req, res) {
    var key = req.params.key || undefined
    if (key != undefined) {
        service.delete(key).then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    }
    else {
        res.end()
    }
}

exports.update = function (req, res) {
    var key = req.params.key || undefined
    var obj = req.body || undefined

    if (key != undefined && obj != undefined) {
        obj.key = key
        service.update(obj).then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    }
    else {
        res.end()
    }
}

exports.select = function(req, res){
    var obj = req.body || undefined
    if (obj != undefined) {
        service.select(obj).then(result => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
    }
    else {
        res.end()
    }
}
*/