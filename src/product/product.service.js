    const ProductRepo = require("./product.repo");
    const dataNull = "";

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
      const ProductExist = await ProductRepo.getProductByproduct_name(product_name);
      if (!ProductExist) {
        await ProductRepo.updateProduct({
          id,
          product_name,
          deskripsi,
          stok,
          tersedia,
        });
        return "Berhasil Update product";
      } else {
        const cekDataId = await ProductRepo.cekDataId(id);
        console.log(cekDataId);
        if (cekDataId == dataNull) {
          return "Maaf Product yg ingin diupdate tidak tersedia";
        } else return "Maaf Nama Product sudah ada";
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
      if (id > 1) {
        const berhasil_hapus = await ProductRepo.deleteRepoProduct(id);
        if (berhasil_hapus) return "Product berhasil dihapus";
        else return "Product memang tidak ada";
      } else {
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
