let numeros1: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91]
let pares: Array<number> = []
let impares: number[] = []

for(const num of numeros1){
    if (num % 2 == 0){
        pares.push(num)
    }else{
        impares.push(num)
    }
}
console.log(`Pares: ${pares.length} \nImpares: ${impares.length}`)