import database from "../../database"

export const deleteProductsService = async(id) => {
    try {
        const res = await database.query(
            "DELETE FROM products WHERE id= $1 RETURNING*",
            [id]
        )
        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}