//Exercicio 1

class Exercicio{
    static compararString(a: string, b: string): boolean{
        return a.toUpperCase(). trim() == b.toUpperCase(). trim()
    }
}
console.log(Exercicio.compararString("IFSP", "ifsp"))

//Exercicio 2

class Exercicio2 {
    static formatar (a: number): string;
    static formatar (a: Date): string;
    static formatar (a: boolean): string; {
    if (typeof a == 'number') {
        return a.toFixed(2);
    }

    if (a instanceof Date) {
        //const dia = string(a.getDate()) 
    }

    if (typeof a == 'boolean') {
        return valor ? 'Sim' : 'Não';
    }
    }
}

//Exercicio 3

class Exercicio3 {
    static contarOcorrencias(a: string, b: string): number {
        return (b.includes("na"));
    }
}
