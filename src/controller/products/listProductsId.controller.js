import { listProductsIdService } from "../../service/products/listProductsId.service"

export const listProductsIdController = async (req, res) =>{
    const {id} = req.params
    try {
        const productById = await listProductsIdService(id)
        return res.status(200).json(productById)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}