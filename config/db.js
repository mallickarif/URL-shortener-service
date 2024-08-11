const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}`);
      console.log(`MONGODB connected: ${connectionInstance}`);
      
  }
  catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
