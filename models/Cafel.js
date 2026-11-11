import mongoose from "mongoose";


const cafelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , "Название обязательно для заполнения"],
        trim: true
    },

    price: {
        type: Number,
        required: [true ,  "Цена обязательно для заполнения"],
        min: 1000
    },
    producer: {
        type: String,
        required: [true , "Производитель обязателен для заполнения"],
        trim: true
    },
    size: {
        type: Number,
        required: [true ,  "Размер обязателен для заполнения"],
        min: 1
    },
    image:{
        type:String
    }
   
})
export default mongoose.model("Cafel" , cafelSchema)