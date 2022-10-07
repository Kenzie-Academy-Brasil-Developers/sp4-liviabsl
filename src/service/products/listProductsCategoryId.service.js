import database from "../../database"

export const listProductsCategoryId = async(category_id) => {
    try {
        const res = await database.query(
            "SELECT p.name AS name, p.price AS price, c.name AS category FROM products p JOIN categories c ON p.category_id = c.id WHERE c.id=$1",
            [category_id]
        )
        console.log(category_id)
        if (res.rowCount === 0) {
            throw new Error("categoria não encontrada");
          }

        return res.rows
    } catch (error) {
        throw new Error(error)
    }
}
