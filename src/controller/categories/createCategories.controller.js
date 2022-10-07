import { createCategoriesService } from "../../service/categories/createCategories.service"

export const createCategoriesController = async (req, res) => {
    const {name} = req.body

    try {
        const category = await createCategoriesService(name)
        return res.status(201).json(category)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}