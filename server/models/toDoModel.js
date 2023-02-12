const mongoose = require('mongoose')

const toDoSchema = mongoose.Schema({
    title:{
        type:String,
        required: [true, 'Title cannot be empty!']
    }
},{
    timestamps: true
}

)

module.exports =    mongoose.model('ToDo',toDoSchema)