import { fabricante } from "./fabricante"

export class produto{
    id: number
    nome: string
    preco: number
    fabricante: fabricante

    constructor( id: number, nome: string, preco: number, fabricante: fabricante){
        this.id = id
        this.nome = nome
        this.preco = preco
        this.fabricante = fabricante
    }
}