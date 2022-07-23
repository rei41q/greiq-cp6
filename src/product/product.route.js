const express = require("express");
const product_service = require("./product.service");
const ProductRouter = express.Router();
// API to get all Products

ProductRouter.use(express.json())

ProductRouter.get("/products", async (req, res) =>{
  try {
    const { q } = req.query;
    const products = await product_service.getAllProducts(q);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json("Something went wrong. Please try again later");
  }
  
});

// API to create new Products

ProductRouter.post("/products", async (req, res) => {
    const {product_name, deskripsi, stok, tersedia} = req.body;
    const newProduct = await product_service.createNewProduct(product_name, deskripsi, stok, tersedia);
      return res.status(200).json("Berhasil menambahkan data")
    
   
});

ProductRouter.put("/products/:id",async(req, res) =>{
  const {product_name, deskripsi, stok, tersedia} = req.body;
  const {id} = req.params;
  const dataProduct = await product_service.updateProduct({
    id,
    product_name,
    deskripsi,
    stok,
    tersedia
  }
    )
  return res.status(200).json(dataProduct);
})

// // API to delete Products
// ProductRouter.delete("/products/:id", async (req, res) => {
//   const { id } = req.params;
//   const deleteProduct = await Productservice.deleteProduct(id);
//   res.json(deleteProduct);
// });

ProductRouter.delete("/products/:id", async(req,res) =>{
  const { id } = req.params;
  const dataProduct = await product_service.deleteProduct(id);
  return res.status(200).json(dataProduct);
})



module.exports = ProductRouter;
