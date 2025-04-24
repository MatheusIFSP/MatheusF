class Exercicio{
    static compararString(a: string, b: string): boolean{
        return a.toUpperCase(). trim() == b.toUpperCase(). trim()
    }
}
console.log(Exercicio.compararString("IFSP", "ifsp"))

