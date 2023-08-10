import express from "express"
import appRouter from "./routes/index"
import cors from "cors"

const app = express();

app.use(cors())

app.use(express.json())

app.use("/api", appRouter)


app.listen("8080", () => console.log("Hello World"))
