import mongoose from "mongoose"

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  };

  let DB_URI: string = "";
  if (process.env.NODE_ENV === "development") 
    DB_URI = process.env.DB_LOCAL_URI!
  if (process.env.NODE_ENV === "production") 
    // after variable ! means that won't be undefined 
    DB_URI = process.env.DB_URI!

    try {
      await mongoose.connect(DB_URI).then((con) => console.log("DB Connected"));      
    } catch (error) {
      console.log(error)
    }
};

export default dbConnect;