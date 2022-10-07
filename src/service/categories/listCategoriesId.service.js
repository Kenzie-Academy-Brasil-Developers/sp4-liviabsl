import database from "../../database"

export const listCategoriesIdService = async (id) => {
    try {
       const res = await database.query(
        'SELECT * FROM categories WHERE id = $1',
        [id]
       )
       return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }
}