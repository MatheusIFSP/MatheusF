import { endereco } from "./endereco"

export class fabricante{
    nome: string
    endereco: endereco

    constructor(nome: string, endereco: endereco){
        this.nome = nome
        this.endereco = endereco
    }
}