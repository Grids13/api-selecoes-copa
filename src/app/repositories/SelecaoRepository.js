import  { consult } from "../database/conexao.js"


class SelecaoRepository {
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;" //SET indica as configurações que serão passadas.Já o ? indica colunas e valores q serão passados no corpo da requisição
        return consult(sql, selecao)
    }
    
    findAll() {
        const sql = "SELECT * FROM selecoes"
        return consult(sql)
    }
    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return consult(sql, id)
    }
    update(selecao, id) {
        const sql = "UPDATE  selecoes SET ? WHERE id=?;" //Fazendo a att por meio do id passado como parâmetro
        return consult(sql, [selecao, id])
    }
    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consult(sql, id)
    }

}

export default new SelecaoRepository()