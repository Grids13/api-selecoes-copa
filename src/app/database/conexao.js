import mysql from "mysql"

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "",
    database:'bdcopa'
})

conexao.connect()
/**
 * @param {string} sql - instrução SQL
 * @param {string | any[]} values - valores para query (opcional)
 * @returns {Promise<any>}
 */


export const consult = (sql, values="") => {
     return new Promise((resolve, reject) => {
            conexao.query(sql, values, (error, result) => {
                if(error) return reject(error)
                const rows = JSON.parse(JSON.stringify(result))
                return resolve(rows)
            })
        })
}

export default conexao //importar para outros arquivos