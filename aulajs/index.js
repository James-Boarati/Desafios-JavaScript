// Desafio de pegar as notas da turmaA e TurmaB , através de uma função.

const alunosDaTurmaA = [
    {
        nome: 'James',
        nota: 10
    },
    {
        nome: 'Lavinia',
        nota: 10
    },
    {
        nome: 'Paulo',
        nota: 10
    }
]

const alunosDaTurmaB = [
    {
        nome: 'João',
        nota: 5
    },
    {
        nome: 'Rafaela',
        nota: 5
    },
    {
        nome: 'Junior',
        nota: 5
    },
    {
         nome: 'Mais um aluno',
         nota: 3
    }
]


function calculaMedia (alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

const media = soma / alunos.length
return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviarMensagem (media, turma) {
    if (media > 5) {
        console.log (`Párabens!! a média da ${turma} é ${media}`)
    } else {
        console.log (`A média da ${turma} é menor que 5`)
    }
}

enviarMensagem(media1, 'turma A')
enviarMensagem(media2, 'turma B')