//importa express
const express  =  require("express");
//importa BodyParser
const bodyParser = require("body-parser");
//instanciar o express que fará requisicoes HTTP
const app = express();
//aceitar requisicoes POST
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Olá Mundo');
})

app.post('/mensagem', (req, res) => {
    console.log("Rota pro webhook");

    const resposta = {
        "fulfillmentMessages": [
            {
            "text": {
                "text": [
                "Text response from webhook"
                ]
            }
            }
        ]
    }
    res.send(resposta);
})


//GERA PORTA EM QUE IRÁ RODAR O NODE
const porta = process.env.PORT || 3000;

app.listen(porta, () =>{
    console.log('Servidor node rodando!');
} )