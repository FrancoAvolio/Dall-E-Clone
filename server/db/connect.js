import mongoose from "mongoose";

const connectDB = (url) => {
  console.log("Connecting to MongoDB with URL:", url); // Agrega esta línea
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
};

export default connectDB;
