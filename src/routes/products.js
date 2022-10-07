import { Router } from "express";
import { createProductController } from "../controller/products/createProduct.controller";
import { deleteProductsController } from "../controller/products/deleteProducts.controller";
import { listProductsCategoryIdController } from "../controller/products/listProductCategoryId.controller";
import { listProductsController } from "../controller/products/listProducts.controller";
import { listProductsIdController } from "../controller/products/listProductsId.controller";
import { updateProductsIdController } from "../controller/products/updateProducts.controller";
const productsRoutes = Router()

productsRoutes.post("", createProductController)
productsRoutes.get("", listProductsController)
productsRoutes.get("/:id", listProductsIdController)
productsRoutes.get("/category/:category_id", listProductsCategoryIdController)
productsRoutes.patch("/:id", updateProductsIdController)
productsRoutes.delete("/:id", deleteProductsController)

export default productsRoutes;