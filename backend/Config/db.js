import mongoose from "mongoose";
export const connectDb = async () => {
  await mongoose
    .connect("mongodb+srv://tomato:tomato@cluster0.vakjg.mongodb.net/")
    .then(() => console.log("DB Connection established"));
};
