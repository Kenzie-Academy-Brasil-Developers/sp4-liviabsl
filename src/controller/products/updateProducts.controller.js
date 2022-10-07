import { updateProductsIdService } from "../../service/products/updateProducts.service"

export const updateProductsIdController = async(req, res) => {
    const {id} = req.params
    try {
        const updatedProduct = await updateProductsIdService(req.body, id)
        return res.status(200).json({
            message: "Product updated",
            product: updatedProduct
        })
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}