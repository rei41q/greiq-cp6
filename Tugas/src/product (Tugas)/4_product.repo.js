    const { Product } = require("../database/models");
    const { Op} = require("sequelize");
    // cari semua Product

    const getAllProducts = async () => {
      return await Product.findAll({
        order: [
          // Will escape title and validate DESC against a list of valid direction parameters
          ["product_name", "ASC"],
        ],
      });
    };

    const getProductByQuery = async (q) => {
      return await Product.findAll({
        where: {
          product_name: {
            [Op.substring]: q,
          },
        },
      });
    };
    // bikin Product baru
    const createNewProduct = async ({product_name, deskripsi, stok, tersedia}) => {
      return await Product.create({
        product_name: product_name,
        deskripsi: deskripsi,
        stok: stok,
        tersedia: tersedia,
      });
    };

    // cari Product berdasar product_namenya
    const getProductByproduct_name = async (product_name) => {
      return await Product.findOne({
        where: { product_name: product_name },
      });
    };

    const cekDataId = async (id) => {
      return await Product.findAll({
        where: {
          id: id,
        },
      });
    };

    const updateProduct = async ({
      id,
      product_name,
      deskripsi,
      stok,
      tersedia,
    }) => {
      return await Product.update(
        {
          product_name: product_name,
          deskripsi: deskripsi,
          stok: stok,
          tersedia,
          tersedia,
        },
        {
          where: {
            id: id,
          },
        }
      );
    };

    const deleteRepoProduct = async (id) => {
      return await Product.destroy({
        where: {
          id: id
        },
      });
    };

    const ProductRepo = {
      getAllProducts,
      getProductByQuery,
      createNewProduct,
      getProductByproduct_name,
      updateProduct,
      deleteRepoProduct,
      cekDataId,
    };

    module.exports = ProductRepo;
