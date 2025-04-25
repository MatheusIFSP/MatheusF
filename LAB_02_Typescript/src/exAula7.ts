class Livro {
    titulo: string
    autor: string
    anoPublicacao: number
    editora: string
                            
                            
    constructor(titulo: string, autor: string, anoPublicacao: number, editora: string){
    this.titulo = titulo
    this.autor = autor
    this.anoPublicacao = anoPublicacao
    this.editora = editora
    }
                            
                            
    exibirDados(){
        console.log(`Título: ${this.titulo}
            Autor: ${this.autor}
            Ano de Publicação: ${this.anoPublicacao}
            Editora: ${this.editora}`)
    }
}
                            
                            //Exercício 2 - LAB 07//
                            
const Sapiens = new Livro("Sapiens", "Yuval Harari", 2011, "L&PM editores")
const PequenoPrincipe = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943, "Éditions Gallimard")   
                              
                            //Exercício 3 - LAB 07//
                                
class Usuario {
    nome: string
    email: string
                            
                            
    constructor(nome: string, email: string){
    this.nome = nome
    this.email = email
    }
    boasVindas(){
        console.log(`Bem-vindo(a), ${this.nome}!
            Seu email é ${this.email}.`)
    }
}
                            
                            
const boasvindas = new Usuario("Matheus", "matheus.f.rodrigues2006@gmail.com")
boasvindas.boasVindas()

                            //Exercício 4 - LAB 07//
                            
class Carro {
    marca: string
    modelo: string
    ano: number

    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
}


                            
                            //Exercício 5 - LAB 07//
                            
                            
export class Produtos {
    nome: string
    preco: number
                            
                            
    constructor(nome: string, preco: number) {
    this.nome = nome
    this.preco = preco
    }
    mostrarInformacoes(): void{
        console.log(`Nome: ${this.nome}
            Preço: ${this.preco}`)
    }
}
                            
                            
const prod = new Produtos("Notebook", 3500)
prod.mostrarInformacoes()