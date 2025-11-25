const products = require("../data/products");

// Get all products
exports.getProducts = (req, res) => {
  res.json(products);
};

// Add new product
exports.addProduct = (req, res) => {
  const newProduct = {
    id: Date.now(),
    ...req.body,
  };

  products.push(newProduct);
  res.json({ message: "Product added", product: newProduct });
};

// Delete product
exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  const index = products.findIndex((p) => p.id == id);
  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  products.splice(index, 1);
  res.json({ message: "Product deleted" });
};
