const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

/* 
    GET - Listar todos os alunos (RA, Nome, Curso)
    GET - Listar um alunoo através do RA informado (Nome, Turma, Cursos)
    POST - Adicionar um aluno na lista
    POST - Adicionar um curso para aluno
    PUT - Alterar os dados de um aluno através do RA
    PUT - Alterar o curso do aluno
    DELETE - Remover aluno da lista
    DELETE - Remover o curso do aluno
*/

var alunos = [
    {
        ra: 123,
        nome: 'Diego',
        turma: 'ADS',
        habilidades: [ 'JavaScript', 'ReactJS', 'Redux' ]
    },
    {
        ra: 123,
        nome: 'Leandro',
        turme: 'DSM',
        habilidades: [ 'VueJs', 'Ruby on Rails', 'Node' ]
    }
];

app.get('/', (req, res) => {
  res.json(alunos);
});

app.post('/', (req, res) => {
  
});

app.put('/', (req, res) => {
  
});

app.delete('/', (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});