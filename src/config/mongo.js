import { MongoClient } from "mongodb";

// Connection URL
const url = "mongodb+srv://nanajusolihun:UWj1oDHDYiQf1AVG@cluster0.smumckk.mongodb.net/?retryWrites=true&w=majority";
const connection = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

(async () => {
  try {
    await connection.connect();
  } catch (error) {
    console.log("MongoDB", error);
  }
})();

// Masukan nama database yang kita ingin hubungkan
const db = connection.db("cluster0");
export default db;
