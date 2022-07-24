const product_service = require("./product.service");

const getAllProduct = async (req, res) => {
  try {
    const { q } = req.query;
    const products = await product_service.getAllProducts(q);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json("Something went wrong. Please try again later");
  }
};

const createNewProduct = async(req, res) =>{
    const { product_name, deskripsi, stok, tersedia } = req.body;
    const newProduct = await product_service.createNewProduct(
      product_name,
      deskripsi,
      stok,
      tersedia
    );
    return res.status(200).json("Berhasil menambahkan data");
}

const updateProduct = async(req, res) =>{
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
}
const deleteProduct = async(req, res) =>{
      const  {id}  = req.params;
      const deleteProductId = await product_service.deleteDataProduct(id);
      return res.status(200).json(deleteProductId);
}
const FunctionProductRouter = {
  getAllProduct,
  createNewProduct,
  updateProduct,
  deleteProduct
};

module.exports = FunctionProductRouter
