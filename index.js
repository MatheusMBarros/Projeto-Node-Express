const express = require('express')
const path = require('path')

const app = express();

//setando a engine de renderizacao com o ejs
app.engine('html', require('ejs').renderFile);
//setando a viewEnsgine como ejs
app.set('view engine', 'ejs');
//setando que o diretorio estatico onde ficam os arquivos estaticos(arquivos , fotos, css )esta na pasta public
app.use('/public', express.static(path.join(__dirname, 'public')))
//setando a pasta onde estao as views
app.set('views',path.join(__dirname,'/views'))

app.get('/', (require, response) => {
    response.render('index', {nome: 'Matheus'})

})

app.listen(5000, () => {
    console.log('Server rodando')
})