import SelecaoRepository from "../repositories/SelecaoRepository.js"

class SelecaoController {


    async index(req, res) { 
       const row = await SelecaoRepository.findAll()  
       res.json(row)                                  
    }
    
    async show(req, res) { 
        const id = req.params.id  // :id , estamos criando um parâmetro para rota 
        const row =  await SelecaoRepository.findById(id)
        res.json(row)
     }
    
     async store(req, res) {
        const selecao = req.body
        const row = await SelecaoRepository.create(selecao)
        res.json(row)
    }
    
    async update(req, res) {
        const selecao = req.body
        const id = req.params.id
        const row = await SelecaoRepository.update(selecao, id)
        res.json(row)
        
    }
    
    async delete(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.json(row)
    }
}

//Padrão singleton --> Cria uma única instâcia para o código todo
export default new SelecaoController()