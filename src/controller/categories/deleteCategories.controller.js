import { deleteCategoriesService } from "../../service/categories/deleteCategories.service"

export const deleteCategoriesController = async(req, res) => {
    const {id} = req.params
    try {
        const deletedCategory = await deleteCategoriesService(id)
        return res.status(204).json(deletedCategory)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}