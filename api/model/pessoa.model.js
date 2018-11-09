var schema
var model

/**
 * tipo: [machine, adminSuport, adminOwner]
 * machine: usuario da aplicação para vender aposta
 * adminSuport: usuario root da aplicação
 * adminOwner: usuario dono da aplicação. Operações de rolback são limitadas
 */

exports.init = function (mongoose) {
    schema = new mongoose.Schema({ 
        nome: String,
        email: String,
        senha: String,
        telefone: String
    })
    model = mongoose.model("Pessoa", schema)
}

exports.model = model
exports.schema = schema

// create new document
exports.save = function (obj) {
    return new Promise((resolve, reject) => {
        model.create(obj, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

// list all docoment from collection
exports.find = function () {
    return new Promise((resolve, reject) => {
        model.find().exec((err, res) => {
            if (err){
                reject(err)
            } 
            resolve(res)
        })
    })
}

// get a objet from id
exports.findById = function (id) {
    return new Promise((resolve, reject) => {
        model.findById(id).exec((err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

// delete object from id
exports.deleteOne = function (id) {
    return new Promise((resolve, reject) => {
        this.findById(id).then(res => {
            model.deleteOne(res, (err) => {
                if (err) reject(err)
                resolve(null)
            })
        }).catch(err => {
            reject(err)
        })
    })
}

exports.updateOne = function (obj) {
    return new Promise((resolve, reject) => {
        var key = obj.key
        delete obj.key
        model.updateOne({ _id: key }, obj, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

exports.select = function(obj){
    return new Promise((resolve, reject) => {
        delete obj._id
        model.find(obj).exec((err, res) => {
            if (err){
                reject(err)
            } 
            resolve(res)
        })
    })
}
