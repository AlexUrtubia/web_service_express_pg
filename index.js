import "dotenv/config.js"
import db from "./src/database/database.js"
import app from "./src/app.js"

const PORT = process.env.PORT || 3004
const main = async () => {
  try {
    await db.connect()
    console.log('"Conectando a la bd"')
    app.listen(PORT, () => {
      console.log("Servidor escucnaod en puerto: " + PORT)
    })
  }
  catch (error) {
    console.log(error)
  }
}

main()