const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'must procide a name'],
        trim: true,
        maxlength: [20, 'name cannot be more tha 20 chcarcters']
    },
    completed: {
        type: Boolean,
        default: false
    },
})


module.exports = mongoose.model('Task', TaskSchema)