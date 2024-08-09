import mongoose from "mongoose"

export const CoonectDB= async () => {
    await mongoose.connect("mongodb+srv://carlosaquino:<password>@cluster0.ykjkr.mongodb.net/");
    console.log("connected");
}