var model = require("../model/pessoa.model")

exports.init = function(odm){
    model.init(odm)
}

exports.list = function () {
    return new Promise((resolve, reject) => {
        model.find().then((res)=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}

exports.add = function (obj) {
    return new Promise((resolve, reject) => {
        model.save(obj).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}

exports.get = function (key) {
    return new Promise((resolve, reject) => {
        model.findById(key).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}

exports.delete = function (key) {
    return new Promise((resolve, reject) => {
        model.deleteOne(key).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}

exports.update = function (obj) {
    return new Promise((resolve, reject) => {
        model.updateOne(obj).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}

exports.select = function(obj){
    return new Promise((resolve, reject) => {
        model.select(obj).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
