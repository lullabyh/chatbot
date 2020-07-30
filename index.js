//importa express
const express  =  require("express");
//importa BodyParser
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Olá Mundo');
})

app.post('/mensagem', (req, res) => {
    console.log(req)
    res.send("mensagem recebida." + req.body.msg);
})


//GERAR UMA PORTA EM QUE IRÁ RODAR O NODE
const porta = process.env.PORT || 3000;

app.listen(porta, () =>{
    console.log('Servidor node rodando!');
} )