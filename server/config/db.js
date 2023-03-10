const mongoose = require('mongoose')

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected')
    }catch(error){
        console.log('DB connection failed')
        console.log(error)
        process.exit(1)

    }
}

module.exports = connectDB