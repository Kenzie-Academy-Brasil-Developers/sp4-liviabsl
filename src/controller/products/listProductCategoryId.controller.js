import { listProductsCategoryId } from "../../service/products/listProductsCategoryId.service"

export const listProductsCategoryIdController = async(req, res) => {
    try {
        const category_id = req.params.category_id
        const category = await listProductsCategoryId(category_id)
        return res.status(200).json(category)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}