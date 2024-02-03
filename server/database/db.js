import mongoose from "mongoose";
const DBConnection = async () => {
  const MONGODB_URI = `mongodb://Niranjan:1234567890@ac-i3gt8zd-shard-00-00.iyvl0ds.mongodb.net:27017,ac-i3gt8zd-shard-00-01.iyvl0ds.mongodb.net:27017,ac-i3gt8zd-shard-00-02.iyvl0ds.mongodb.net:27017/?ssl=true&replicaSet=atlas-grec25-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection established");
  } catch (error) {
    console.error("Error while connecting the database", error.message);
  }
};
export default DBConnection;
