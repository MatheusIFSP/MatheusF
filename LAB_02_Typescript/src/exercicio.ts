                            // Exercício 1//

let idades01: number[] = [ 10, 15, 20, 8, 17, 25 ]

for (let idade of idades) {
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
const index = nomes.indexOf("Pedro");
if(index !== -1) {
    nomes0.splice(index, 1);
}
nomes0.push("João");
nomes0.unshift("Beatriz");
console.log("Lista final:", nomes0);
console.log("Total de nomes:", nomes0.length);

                            // Exercício 3//

let ListaMista: (number|string)[] = [1, "Maçã", 2, "Banana", 3, "Laranja"]
let numeros: [] = [];
let frutas: [] = [];
for (let item of ListaMista) {
    if (typeof item === "number") {
        numeros.push(number);
    } else if (typeof item === "string") {
        frutas.push(string);
    }
}
console.log("Números:", numeros);
console.log("Frutas:", frutas);

                            // Exercício 2.1//