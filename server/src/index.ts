import express from "express"
import categoryRouter from "./routes/category"
import subcategoryRouter from "./routes/subcategory"
import itemRouter from "./routes/item"

const app = express();

app.use("/api/categories",categoryRouter)
app.use("/api/subcategories",subcategoryRouter)
app.use("/api/items",itemRouter)

app.listen("8080",() => console.log("Hello World"))
