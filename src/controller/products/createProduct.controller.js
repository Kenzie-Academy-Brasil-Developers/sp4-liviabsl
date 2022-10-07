import { createProductService } from "../../service/products/createProducts.service"

export const createProductController = async(req, res) => {
    const {name, price, category_id} = req.body
    try {
        const product = await createProductService(name, price, category_id)
        return res.status(201).json({
            message: "Product created",
            product: product
        })
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}
