import mongoose from "mongoose";

// Importa mongoose y otras dependencias

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url.replace(/['"]/g, "")) // Quitamos comillas de la cadena de conexión
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
};

export default connectDB;
