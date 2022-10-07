import { listCategoriesIdService } from "../../service/categories/listCategoriesId.service"

export const listCategoriesIdController = async (req, res) =>{
    const {id} = req.params
    try {
        const categoryById = await listCategoriesIdService(id)
        return res.status(200).json(categoryById)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}