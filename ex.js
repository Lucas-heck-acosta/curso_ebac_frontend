class Aluno {
    constructor(nome, nota)
    {
        this.nome = nome;
        this.nota = nota;
    }

    mediaBoa()
    {
        return this.nota >= 6 ? true : false;
    }
}

const alunos = [
    new Aluno("Lucas", 7),
    new Aluno("Pedro", 5),
    new Aluno("Matheus", 8),
    new Aluno("Yuri", 6),
    new Aluno("Giovanna", 10),
    ];

function aprovados(alunos)
{
    return alunos.filter(function(aluno) {
        return aluno.mediaBoa();
    })
}

const listaAprovadps = aprovados(alunos);

console.log(listaAprovadps)

