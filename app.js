const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

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

app.get('/:ra', (req, res) => {
    const ra = req.params.ra;
    let aluno = alunos.find(x => x.ra == ra);

    if (!aluno) {
        return res.status(404).send('Aluno não encontrado');
    }

    res.json(aluno);
});

app.post('/', (req, res) => {
    let aluno = {
        ra: req.body.ra,
        nome: req.body.nome,
        turma: req.body.turma,
        habilidade: req.body.habilidades
    };
    alunos.push(aluno);

    res.status(201).send('Aluno criado com sucesso');
});

app.post('/', (req, res) => {
    let aluno = alunos.findIndex(x => x.ra == req.body.ra);
    
    if (aluno) {
        return res.status(409).send('Aluno já cadastrado');
    }

    alunos.push(req.body);
    res.status(201).send('Aluno criado com sucesso');
});


app.put('/', (req, res) => {
    let ra = req.query.ra;

    index = alunos.findIndex(x => x.ra == ra);
    alunos[index] = {
        ra: req.body.ra,
        nome: req.body.nome,
        habilidades: req.body.habilidades
    };

    res.status(200).send('Aluno alterado com sucesso');
});

app.put('/:ra', (req, res) => {
    let ra = req.params.ra;
    let index = alunos.findIndex(x => x.ra == ra);
    let aluno = alunos.find(x => x.ra == ra);

    if (aluno) {
        return res.status(404).send('Aluno não encontrado');
    }

    alunos[index]
    aluno.turma = req.body.turma;
    alunos[index] = aluno;
    res.status(200).send('Turma alterada com sucesso');
    
});

app.delete('/', (req, res) => {
    const index = alunos.findIndex(x => x.ra == req.query.ra);

    if (index <= -1) {
        return res.status(404).send('Aluno não encontrado');
    }

    alunos.splice(index, 1);
    res.json(alunos);
});

app.delete('/:ra', (req, res) => {
    let ra = req.params.ra;

    index = alunos.findIndex(x => x.ra == ra);
    if (index < 0) {
        return res.status(404).send('Aluno não encontrado');
    }

    delete alunos[index].turma;
    res.status(200).send('Turma deletada do aluno com sucesso');
});

app.listen(port, () => {
    console.log(`App rodando em: ${port}`)
});