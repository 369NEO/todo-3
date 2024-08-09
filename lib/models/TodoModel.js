const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema({            
    title:
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
    isCompleted:
    {
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const Todo = mongoose.models.todo || mongoose.models("todo",Schema);

export default Todomodel;
