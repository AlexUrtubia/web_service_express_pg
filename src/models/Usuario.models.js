import db from "../database/database.js"

export default class Usuario {
  constructor(id, nombre, apellido, passwod) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.passwod = passwod;
  }

  static async findAll() {
    return new Promise (async (resolve, reject) => {
      try {
        let query = {
          text: "SELECT id, nombre, email FROM usuarios"
        }
        let result = await db.query(query)
        resolve(result.rows)
      } catch (error) {
        console.log('error', error)
      }
    })
  }
}