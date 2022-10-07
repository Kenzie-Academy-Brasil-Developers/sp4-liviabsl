import { Router } from "express";
import { createCategoriesController } from "../controller/categories/createCategories.controller";
import { deleteCategoriesController } from "../controller/categories/deleteCategories.controller";
import { listCategoriesController } from "../controller/categories/listCategories.controller";
import { listCategoriesIdController } from "../controller/categories/listCategoriesId.controller";
import { updateCategoriesIdController } from "../controller/categories/updateCategoriesId.controller";
const categoriesRoutes = Router()

categoriesRoutes.post("", createCategoriesController)
categoriesRoutes.get("", listCategoriesController)
categoriesRoutes.get("/:id", listCategoriesIdController)
categoriesRoutes.patch("/:id", updateCategoriesIdController)
categoriesRoutes.delete("/:id", deleteCategoriesController)


export default categoriesRoutes;

