    const product_service = require("./3_product.service");

    //KET ERROR 

    const error400 = "Permintaan tidak valid, Silahkan Masukan value variable product_name, deskripsi, stok(int) dan tersedia(boolean) pada body raw JSON";
    const error500 = "Something went wrong. Please try again later"
    const errormessage = {error400, error500}

    //-----------------------------//

    const getAllProduct = async (req, res) => {
      try {
        const { q } = req.query;
        const products = await product_service.getAllProducts(q);
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json(errormessage.error500);
      }
    };

    const createNewProduct = async (req, res) => {
      try {
        const { product_name, deskripsi, stok, tersedia } = req.body;
        const newProduct = await product_service.createNewProduct({
          product_name,
          deskripsi,
          stok,
          tersedia,
        });
        return res.status(200).json(newProduct);
      } catch (error) {
        res.status(400).json(errormessage.error400);
      }

    };

    const updateProduct = async (req, res) => {
      try {
        const { product_name, deskripsi, stok, tersedia } = req.body;
        const { id } = req.params;
        const dataProduct = await product_service.updateProduct({
          id,
          product_name,
          deskripsi,
          stok,
          tersedia,
        });
        return res.status(200).json(dataProduct);
      } catch (error) {
        res.status(400).json(errormessage.error400);
      }

    };
    const deleteProduct = async (req, res) => {
      const { id } = req.params;
      const deleteProductId = await product_service.deleteDataProduct(id);
      return res.status(200).json(deleteProductId);
    };
    const FunctionProductRouter = {
      getAllProduct,
      createNewProduct,
      updateProduct,
      deleteProduct,
    };

    module.exports = FunctionProductRouter;
