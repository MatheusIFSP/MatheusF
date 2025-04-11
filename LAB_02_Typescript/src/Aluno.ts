export class Alunos{
    nome: string
    matricula: string
    idade: number

    constructor(nome: string, matricula: string, idade: number){
        this.nome = nome
        this.matricula = matricula
        this.idade = idade
    }

    imprimiAluno(){
        console.log(`Nome: $(this.nome)
            Matricula: $(this.matricula)
            Idade: $(this.idade)`)
    }
}
const aluno1 = new Alunos("Pedro","BTV1125154", 23)
aluno1.imprimiAluno()

aluno1.nome = "Carlos"

aluno1.imprimiAluno()