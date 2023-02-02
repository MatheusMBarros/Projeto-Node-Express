const express = require('express')
const path = require('path')
//para recuperar a informacao do body
var bodyParser = require('body-parser');
const app = express();

//setando a engine de renderizacao com o ejs
app.engine('html', require('ejs').renderFile);
//setando a viewEnsgine como ejs
app.set('view engine', 'ejs');
//setando que o diretorio estatico onde ficam os arquivos estaticos(arquivos , fotos, css )esta na pasta public
app.use('/public', express.static(path.join(__dirname, 'public')))
//setando a pasta onde estao as views
app.set('views', path.join(__dirname, '/views'))
//para poder quebrar o body em um json
app.use(bodyParser.json())
// integrando o formulario no node
app.use(bodyParser.urlencoded({
    extended: true
}))

//lista
var tarefas =[]

//exibe a lista
app.get('/', (require, response) => {
    response.render('index', {tarefasList: tarefas})

})

//add tarefa
app.post('/', (request, response) => {
    if (request.body.tarefa == "") {
        console.error('insira uma tarefa')
        response.redirect('/')
    } else {
        tarefas.push(request.body.tarefa)
        response.redirect('/')
    }

})

//deleta a tarefa
app.get('/deletar/:id', (request, response) => {
    tarefas = tarefas.filter((val, index) => {
        if (index != request.params.id) {
            return val;
        }
    })
   response.redirect('/')
})


app.listen(5000, () => {
    console.log('Server rodando')
})