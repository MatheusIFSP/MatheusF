for ( let i:number = 0; i < 5; i++) {
        console.log (`Iteração: ${i}`);
    }
let contador = 0;
while ( contador < 5) {
    console.log (`Iteração: ${contador}`);
    contador ++;
}
let num = 5;
do {
    console.log (`Número: ${num}`) ;
    num ++;
} while (num < 5) ;

const numeros0 = [10, 20, 30, 40];
for (const num of numeros0) {
    console.log(`Números: ${num}`);
}

const person = { nome: "Alice", idade: 25, cidade: "São Paulo" };
for (let chave in person) {
    console.log(chave);
}
    