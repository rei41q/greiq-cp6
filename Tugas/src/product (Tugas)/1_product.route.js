    const express = require("express");
    const ProductRouter = express.Router();
    const ProductControler = require("./2_product.controller");
    // API to get all Products

    ProductRouter.use(express.json());

    ProductRouter.get("/products", ProductControler.getAllProduct); //GET ALL PRODUCT, BISA QUERY 1 PRODUCT OR LIKE: ORDER BY PRODUCT_NAME ASC

    // API to create new Products

    ProductRouter.post("/products", ProductControler.createNewProduct); //BUAT PRODUCT, ADA NOTIF JIKA NAMA PRODUCT SUDAH ADA DENGAN YG LAIN

    ProductRouter.put("/products/:id", ProductControler.updateProduct); //UPDATE PRODUCT, ADA NOTIF JIKA NAMA PRODUCT SUDAH ADA DENGAN YG LAIN

    // // API to delete Products
    // ProductRouter.delete("/products/:id", async (req, res) => {
    //   const { id } = req.params;
    //   const deleteProduct = await Productservice.deleteProduct(id);
    //   res.json(deleteProduct);
    // });

    ProductRouter.delete("/products/:id", ProductControler.deleteProduct); //DELETE PRODUCT, ADA NOTIF JIKA PRODUCT MEMANG TIDAK ADA

    module.exports = ProductRouter;
