const app = require('./server/app');
require('dotenv').config();

const port = process.env.PORT || 8000;
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      console.log("MongoDB Connected...");
    } catch (error) {
      console.error(`MongoDB Connection Error ${error}`);
      process.exit(1);
    }
  };

connectDB()

app.listen(port, () => {
    console.log(`Server running on port:${port}`);
});
