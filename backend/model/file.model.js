import mongoose from 'mongoose'

const fileSchema = new mongoose.Schema({
    path:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required: true,
    },
    downloadCount:{
        type:Number,
        default:0,
        required:true,
    }
})

const File = mongoose.model('files',fileSchema);

export default File;