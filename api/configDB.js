var mongoose = require("mongoose")

const dbname = 'api-reativa'
const url = `mongodb://localhost:27017/${dbname}`

exports.init = function(){
	return new Promise((resolve, reject)=>{
	    mongoose.connect(url)

	    var db = mongoose.connection
	    db.on("open", ()=>{
	        console.log(`Database ${dbname} connectado`)
	        resolve(mongoose)
	    })
	    
	    db.on("error", ()=>{
	        reject("falha ao tentar se conectar com o banco")
	    })	
	})  
}
