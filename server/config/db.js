const mongoose = require('mongoose');

const DB = () => {
    try {
      // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ik72pqc.mongodb.net/`
      const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ik72pqc.mongodb.net/newsBoard`;

      mongoose
        .connect(uri)
        .then(() => {
          console.log("🔗 Mongodb connected successfully");
        })
        .catch((err) => {
          console.log("error connecting to mongodb", err);
        });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = DB;

