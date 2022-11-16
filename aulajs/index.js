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
    }
]

function calculaMedia (alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}
const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviarMensagem (media) {
    if (media > 5) {
        console.log (`Párabens!! Sua media é de ${media}`)
    } else {
        console.log ('Sua média foi menor que 5')
    }
}
enviarMensagem(media1)
enviarMensagem(media2)