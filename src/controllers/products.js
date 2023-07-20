import { ObjectId } from "mongodb";
import Products from "../models/products.js";
import messages from "../utils/message.js";

// Menampilkan AllData Products
const AllProducts = async (req, res) => {
  try {
    const data = await Products.find().toArray();

    messages(res, 200, "Show All data Products", data);
  } catch (error) {
    messages(res, 500, error?.message || "Internal Server Error");
  }
};

// Menampilkan detail Products by ID
const detailProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const _id = new ObjectId(id);
    const detail = await Products.findOne({ _id });

    if (detail) return messages(res, 200, "Show data All Products", detail);
    messages(res, 500, "Product Not Found");
  } catch (error) {
    messages(res, 500, error?.message || "Internal Server Error");
  }
};

// Menghapus data products by id
const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const _id = new ObjectId(id);
    const detail = await Products.deleteOne({ _id });

    if (detail) {
      return messages(res, 200, "Delete Products Success", detail);
    } else {
      messages(res, 500, "Product Not Found");
    }
  } catch (error) {
    messages(res, 500, error?.message || "Internal Server Error");
  }
};

// Membuat data products
const createProduct = async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const stock = req.body.stock;

  try {
    const newData = await Products.insertOne({ name, price, stock });

    messages(res, 201, "Create Data Product Success", newData);
  } catch (error) {
    messages(res, 500, error?.message || "Internal Server Error");
  }
};

// MeUPDATE data Product
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const _id = new ObjectId(id);
    const detail = await Products.findOne({ _id });

    if (detail) {
      await Products.updateOne({ _id }, { $set: { ...data } });

      messages(res, 202, "Update data Product Success")
    }
  } catch (error) {
    messages(res, 500, error?.message || "Internal Server Error");
  }
};

export { AllProducts, detailProduct, deleteProduct, createProduct, updateProduct };
