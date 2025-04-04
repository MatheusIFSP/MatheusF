                            // Exercício 1//

let idades01: number[] = [ 10, 15, 20, 8, 17, 25 ]

for (let idade of idades01) {
    if (idade <12) {
    console.log(`${idade} anos - criança`);
} else if (idade >= 12 && idade < 18) {
    console.log(`${idade} anos - adolescente`);
} else {
    console.log(`${idade} anos - adulto`);
}
}

                            // Exercício 2//
    
const nomes0: string[] = ["Carlos", "Ana", "Pedro", "Mariana"];
const index: number = nomes0.indexOf("Pedro");
if(index !== -1) {
    nomes0.splice(index, 1);
}
nomes0.push("João");
nomes0.unshift("Beatriz");
console.log("Lista final:", nomes0);
console.log("Total de nomes:", nomes0.length);

                            // Exercício 3//

let ListaMista: (number|string)[] = [1, "Maçã", 2, "Banana", 3, "Laranja"]
let numeros:number[] = [];
let frutas: string[] = [];
for (let item of ListaMista) {
    if (typeof item === "number") {
        numeros.push(item);
    } else if (typeof item === "string") {
        frutas.push(item);
    }
}
console.log("Números:", numeros);
console.log("Frutas:", frutas);

                            // Exercício 2.1//

let numeros1: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91]

                            //Exercício 2.2//

                            //Exercício 2.3//

                            //Exercício 2.4//

                            //Exercício Adicional//

                            //Exercício 1 - Funções//

function maiuscula(palavra: string): string {
    return palavra.toUpperCase();
}

const maiuscula0 = (palavra: string): string => palavra.toUpperCase();

                            //Exercício 2 - Funções//

function multiplicar (a: number, b: number): number {
    return a * b
}
const resultado = multiplicar(7, 8);
console.log (resultado);

                            //Exercício 3 - Funções//

function dobrarNumeros(): number[] {
    let numeros = [2, 3, 4, 5, 6];
    const resultado0: number[] = [];
    for (let i = 0; i < numeros.length; i++) {
        resultado0.push(numeros[i] * 2);
    }
    return resultado0;
}
console.log (resultado);