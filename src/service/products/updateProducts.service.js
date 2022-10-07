import database from "../../database"

export const updateProductsIdService = async(data, id) => {
    const keys = Object.keys(data)
    const values = Object.values(data)
    let query = "UPDATE products SET "
    for(let i=0; i<keys.length; i++){
        query+= `${keys[i]} = \$${i+1}, `
    }
    query = query.slice(0,-2)
    query+=` WHERE id=\$${keys.length+1} RETURNING *;`
    console.log(query)
    try {
        const res = await database.query(
            query,
            [...values, id]
        )
        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}