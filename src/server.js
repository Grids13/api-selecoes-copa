
import app from './app.js'

const PORT = 5000 //criar uma porta

//fazer a conexao
app.listen(PORT, () => {  //escutar a porta 3000
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})

