    const ProductRepo = require("./4_product.repo");
    const dataNull = "";

    //KET DATA
    const getAllProducts = async (q) => {
      // logika bisnis
      if (q) {
        const adaQuery = await ProductRepo.getProductByQuery(q);
        if (adaQuery != dataNull) return await ProductRepo.getProductByQuery(q);
        else return "Product tidak ada";
      } else {
        return await ProductRepo.getAllProducts();
      }
    };

    const createNewProduct = async ({
      product_name,
      deskripsi,
      stok,
      tersedia,
    }) => {
      const ProductExist = await ProductRepo.getProductByproduct_name(product_name);
      if (!ProductExist) {
        await ProductRepo.createNewProduct({product_name, deskripsi, stok, tersedia});
        return "Berhasil Membuat Product";
      } else {
        return "Maaf nama product sudah ada";
      }
    };

    const updateProduct = async ({
      id,
      product_name,
      deskripsi,
      stok,
      tersedia,
    }) => {
      const cekId = await ProductRepo.cekDataId(id);
      if (cekId!=dataNull) {
        const cekDataName = await ProductRepo.getProductByproduct_name(product_name);
        if(!cekDataName){
        await ProductRepo.updateProduct({
          id,
          product_name,
          deskripsi,
          stok,
          tersedia,
        });
        return "Berhasil Update product";
        }
        else{
          return "Maaf Nama Product sudah ada";
        }
      }
      else{
        return error;
      }
    };
    // const deleteProduct = async (ProductId) => {
    //   if (ProductId != 1) {
    //     return await ProductRepo.deleteProduct(ProductId);
    //   } else {
    //     return "Delete is restricted for this Product";
    //   }
    // };

    const deleteDataProduct = async (id) => {
      if (id != 1) {
        const berhasil_hapus = await ProductRepo.deleteRepoProduct(id);
        if (berhasil_hapus) return "Product berhasil dihapus";
        else return error;
      } else if(id==1) {
        return "Tidak dapat menghapus super user";
      }
    };

    const Productservice = {
      getAllProducts,
      createNewProduct,
      updateProduct,
      deleteDataProduct,
      // deleteProduct,
    };

    module.exports = Productservice;
