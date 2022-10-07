import { updateCategoriesIdService } from "../../service/categories/updateCategoriesId.service"

export const updateCategoriesIdController = async(req, res) => {
    const {name} = req.body
    const {id} = req.params
    try {
        const updatedCategory = await updateCategoriesIdService(name, id)
        return res.status(200).json({
            message: "Category updated",
            category: updatedCategory
        })
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}