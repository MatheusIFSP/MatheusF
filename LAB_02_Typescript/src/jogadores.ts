export class jogador {
    id: number;
    nome: string;
    cpf: number;
    email: string;
    telefone: number;
    posicao: string;

    constructor(id: number, nome: string, cpf: number, email: string, telefone: number, posicao: string){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.posicao = posicao;
    }
}