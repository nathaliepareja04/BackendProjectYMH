const mongoose = require('mongoose')

mongoose.set("strictQuery", false);

module.exports = connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log(`base de datos conectada a ${db.connection.name}`);
  } catch (error) {
    console.log(`error al conectar a la base de datos ${error.message}`);
  }
};