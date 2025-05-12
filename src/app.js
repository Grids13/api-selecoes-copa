import express from "express" //importanto o express para ter acesso as nossas rotas
import SelecaoContoller from "./app/controllers/SelecaoController.js"

const app = express() //criar uma instância para o express para  usar as rotas

app.use(express.json()) //indicar para o express ler o body com json

                       
                                 //ROTAS

app.post('/selecoes', SelecaoContoller.store )
app.get('/selecoes', SelecaoContoller.index)
app.get('/selecoes/:id', SelecaoContoller.show)
app.put('/selecoes/:id', SelecaoContoller.update)   
app.delete('/selecoes/:id', SelecaoContoller.delete)
     

export default app



