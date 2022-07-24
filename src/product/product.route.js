    const express = require("express");
    const ProductRouter = express.Router();
    const ProductControler = require("./product.controler");
    // API to get all Products

    ProductRouter.use(express.json());

    ProductRouter.get("/products", ProductControler.getAllProduct);

    // API to create new Products

    ProductRouter.post("/products", ProductControler.createNewProduct);

    ProductRouter.put("/products/:id", ProductControler.updateProduct);

    // // API to delete Products
    // ProductRouter.delete("/products/:id", async (req, res) => {
    //   const { id } = req.params;
    //   const deleteProduct = await Productservice.deleteProduct(id);
    //   res.json(deleteProduct);
    // });

    ProductRouter.delete("/products/:id", ProductControler.deleteProduct);

    module.exports = ProductRouter;
