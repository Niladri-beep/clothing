import mongoose from "mongoose";

const mongoDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://arijitghosh1203:arijit12@cluster0.om4au.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Db Connection");
  } catch (error) {
    console.log("Error to connect db" + error);
  }
};

export default mongoDb;
