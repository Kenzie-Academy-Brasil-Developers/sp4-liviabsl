import database from "../../database"
import { deleteProductsService } from "../../service/products/deleteProducts.service"

export const deleteProductsController = async(req, res) => {
    const {id} = req.params
    try {
        const deletedProduct = await deleteProductsService(id)
        return res.status(204).json(deletedProduct)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}
