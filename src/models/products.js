import db from "../config/mongo.js";

// membuat variabel untuk collections
const Products = db.collection("Products");

export default Products
