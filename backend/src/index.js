const express = require('express');//importei a biblioteca express para a variavel expre
const app = express();//declarei uma estancia para usar seus metodos
const routes = require('./routes');//precisa da barra por não ser um pacote mas uma pasta
const cors = require('cors');

app.use(express.json());
app.use(routes);
app.use(cors());//envia origem onde declara ondereço http da hospedagem da aplicação



app.listen(3333);
//rota criada
/* app.post('/user',(request, response) => {
    const data = request.body;//query de consulta navegador
    //const data = request.body;//informação da página
    //echo('Ola');
    console.log(data);

    return response.json({
    evento: 'Wello world',
    aluno: 'John',
    title: 'hola'
})
});

app.get('/user', (request, response) => {
    const da = request.query;
    console.log(da);
    
    return response.json('true');
}) */

//app.listen(3333);//abri uma porta para aplicação