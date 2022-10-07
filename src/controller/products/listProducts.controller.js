import { listProductsService } from "../../service/products/listProducts.service"

export const listProductsController = async(req, res) => {
    const {name, price} = req.body
    try {
        const products = await listProductsService(name, price)
        return res.status(200).json(products)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}