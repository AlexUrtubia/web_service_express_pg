import express from "express"
import cors from "cors"
import morgan from "morgan"
import usuariosRoutes from "./routes/usuarios.routes.js"
import viewsRouter from "./routes/views.routes.js"
import { create } from "express-handlebars"

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// middlewares
app.use(express.json()); // to parse JSON bodies (req.body)
app.use(express.urlencoded({ extended: true })); // for parsing URL-encoded forms
app.use(cors())
app.use(morgan("tiny"))

//configuración handlebars
const hbs = create({
  partialsDir: [path.resolve(__dirname, "./views/partials/")],
});

//configuración de handlebars como motor de plantillas
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));



// endpoints
app.use("/api/v1/usuarios", usuariosRoutes)

//rutas de vustas
app.use("/", viewsRouter)

app.all("*", (req, res) => {
  res.status(404).send("ruta no encontrada.")
})
export default app