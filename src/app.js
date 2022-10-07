import express from "express";
import "dotenv/config";
import categoriesRoutes from "./routes/categories.js";
import { startDatabase } from "./database/index.js";
import productsRoutes from "./routes/products.js";
const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);

app.get("/", (request, response) => {
  return response.json({
    message: "Hello World Kenzie",
  });
});

export default app.listen(3333, () => {
  startDatabase()
  .then(()=> console.log("App rodando na porta 3333"))
  .catch((err)=> console.log("Erro durante inicialização do servidor", err))

});
