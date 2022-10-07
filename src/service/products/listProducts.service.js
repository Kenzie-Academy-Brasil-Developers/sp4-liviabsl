import database from "../../database"

export const listProductsService = async() => {
    try {
        const res = await database.query(
            "SELECT * FROM products"
        )
        return res.rows
    } catch (error) {
        throw new Error(error)
    }
}