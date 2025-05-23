//Exercício 1

import { DateUtils } from "./DateUtils";

const dateUtils = new DateUtils()

console.log( dateUtils.formatarData(new Date(), 'YYYY-MM-DD'))
console.log(dateUtils.diferencaEmDias(new Date("2025-04-01"), new Date()))
console.log(dateUtils.adicionarDias(new Date(), 10))
console.log(dateUtils.ehFinalDeSemana(dateUtils.adicionarDias(new Date(), 2)))
console.log(dateUtils.converterParaISO(new Date()))

//Exercício 2

interface Livros {
    titulo: string
    autor: string
    anoPublicacao: number
}
const sapiens: Livros = {
    titulo: "Sapiens",
    autor: "Yuval Harari",
    anoPublicacao: 2011
}

//Exercício 3

interface Veiculo {
    marca: string
    modelo: string
    ligar(): void
}
class Carroo implements Veiculo {
    marca: string
    modelo: string
    constructor(marca: string, modelo: string){
        this.marca = marca
        this.modelo = modelo
    }
    ligar(): void{
        
    }
    nomeCarro(): void {
        console.log("Corsa")
    }
}