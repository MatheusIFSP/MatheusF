class Calculadora {
    static PI: number = 3.14159;
    
    
    static somar(a: any, b: any): any {
        return a + b;
    }
    
    subtrair(a: number, b: number): number {
        return a - b;
    }
}


console.log(Calculadora.somar(2,2))
console.log(Calculadora.somar('IF','SP'))

console.log(Calculadora.PI)