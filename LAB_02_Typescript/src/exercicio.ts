                            // Exercício 1 - LAB 02//

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

                            // Exercício 2 - LAB 02//
    
const nomes0: string[] = ["Carlos", "Ana", "Pedro", "Mariana"];
const index: number = nomes0.indexOf("Pedro");
if(index !== -1) {
    nomes0.splice(index, 1);
}
nomes0.push("João");
nomes0.unshift("Beatriz");
console.log("Lista final:", nomes0);
console.log("Total de nomes:", nomes0.length);

                            // Exercício 3 - LAB 02//

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

                            // Exercício 2.1 - LAB 03//

let numeros1: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91]
let pares: Array<number> = []
let impares: number[] = []

for(const num of numeros){
    if (num % 2 == 0){
        pares.push(num)
    }else{
        impares.push(num)
    }
}
console.log(`Pares: ${pares.length} \nImpares: ${impares.length}`)

                            //Exercício 2.2 - LAB 03//

let produtos0: string[] = ["Arroz", "Feijão", "Leite", "Pão"]
while (produtos0.indexOf("Leite") > 0){
    produtos0[produtos0.indexOf("Leite")] = "Queijo"
}
produtos0.shift()
produtos0.push("Café")

console.log(`Lista de produtos: ${produtos0}`)

                            //Exercício 2.3 - LAB 03//

let dados: (number | string)[] = [10, "Azul", 25, "Vermelho", 30, "Verde"]
let valoresNumericos: number[] = []
let valoresTextuais: string[] = []
for (const item of dados) {
    if (typeof(item) == "string"){
        valoresTextuais.push(item)
    }else{
        valoresNumericos.push(item)
    }
}
console.log(`Valores Numéricos: ${valoresNumericos}\nValores Textuais: ${valoresTextuais}`)

                            //Exercício 2.4 - LAB 03//

let numeros3: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120, 33, 47, 52]
let multiplosde3: number[] = []
let multiplosde5: number[] = []
let outros: number[] = []
for (const num of numeros3) {
    if(num % 3 == 0){
        multiplosde3.push(num)
    }
    else if(num % 5 == 0){
        multiplosde5.push(num)
    }else{
        outros.push(num)
    }
}
console.log(`Multiplos de 3: ${multiplosde3}\nMultiplos de 5: ${multiplosde5}\nOutros: ${outros}`)

                            //Exercício Adicional - LAB 03//

                            //Exercício 1 - Funções - LAB 04//

function maiuscula(palavra: string): string {
    return palavra.toUpperCase();
}

const maiuscula0 = (palavra: string): string => palavra.toUpperCase();

                            //Exercício 2 - Funções - LAB 04//

function multiplicar (a: number, b: number): number {
    return a * b
}
const resultado = multiplicar(7, 8);
console.log (resultado);

                            //Exercício 3 - Funções - LAB 04//

function dobrarNumeros (numeros: number[]): number[]{
    let dobrar: number[] = []
    for (let i: number = 0; i < numeros.length; i++) {
        dobrar.push(numeros[i] * 2)
    }
    return dobrar;
}
console.log (dobrarNumeros ([2, 3, 4, 5, 6]))

                            //Exercício 4 - Funções - LAB 04//

type Funcionario = {
    nome: string;
    cargo: string;
};

const funcionarios: Funcionario[] = [
    {nome: "Marcos", cargo: "Desenvolvedor"},
    {nome: "Fernanda", cargo: "Gerente"},
    {nome: "Carlos", cargo: "Desenvolvedor"},
    {nome: "Joana", cargo: "Analista"}
];

const cargoDesejado = funcionarios.filter(Funcionario => Funcionario.cargo == "Desenvolvedor")
console.log(cargoDesejado)

                            //Exercício 5 - Funções - LAB 05//
type Aluno = {
    nome: string;
    notas: number;
};

const alunos: Aluno[] = [
    {nome: "Alice", notas: 8},
    {nome: "Bruno", notas: 5},
    {nome: "Carla", notas: 7},
    {nome: "Daniel", notas: 6}
];

let boasNotas = alunos.filter(Aluno => Aluno.notas >= 7)
console.log(boasNotas)

                            //Exercício 6 - Funções - LAB 05//

type Evento = {
    nome: string;
    mes: string;
};

const eventos: Evento[] = [
    {nome: "Workshop TypeScript", mes: "Janeiro"},
    {nome: "Hackaton", mes: "Março"},
    {nome: "Conferência de IA", mes: "Janeiro"}
];
const mesDesejado = eventos.filter(Evento => Evento.mes == "Janeiro");
console.log(mesDesejado)

                            //Exercício 1 - LAB 06//

type Tarefa = {
    descricao: string;
    prioridade: number;
    concluida: Boolean;
};

function executarTarefas[] = Tarefa[]