import { MongoClient } from "mongodb";
import { DB_URL } from "./env.js";

// Connection URL
const connection = new MongoClient(DB_URL, {
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
