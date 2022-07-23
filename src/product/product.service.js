const ProductRepo = require("./product.repo");

const getAllProducts = async (q) => {
  // logika bisnis
  if (q) {
    return await ProductRepo.getProductByQuery(q); //GET ONE PRODUCT BERDASARKAN QUERY
  } else {
    return await ProductRepo.getAllProducts(); //GET ALL PRODUCT
  }
};

const createNewProduct = async (product_name, deskripsi, stok, tersedia) => {
  const ProductExist = await ProductRepo.getProductByproduct_name(product_name);
  if (!ProductExist) {
    return await ProductRepo.createNewProduct(
      product_name,
      deskripsi,
      stok,
      tersedia
    );
  } else {
    return "Product is already exist";
  }
};

  const updateProduct = async ({
    id,
    product_name,
    deskripsi,
    stok,
    tersedia,
  }) => {
    return await ProductRepo.updateProduct({
      id,
      product_name,
      deskripsi,
      stok,
      tersedia,
    });
  };
// const deleteProduct = async (ProductId) => {
//   if (ProductId != 1) {
//     return await ProductRepo.deleteProduct(ProductId);
//   } else {
//     return "Delete is restricted for this Product";
//   }
// };

const deleteProduct = async (id) =>{
  if(id>1 && id!=null){
    return await ProductRepo.deleteProduct(id);
  }
  else{
    return "Delete is restricted for this Product";
  }
}

const Productservice = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct
  // deleteProduct,
};

module.exports = Productservice;
