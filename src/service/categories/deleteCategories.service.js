import database from "../../database"

export const deleteCategoriesService = async(id) => {
    try {
        const res = await database.query(
            "DELETE FROM categories WHERE id = $1 RETURNING*",
            [id]
        )
        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}