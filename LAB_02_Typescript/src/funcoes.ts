function message(frase:string){
    return frase
}

const message1 = (frase:string) => frase
message1("Qualque coisa")

function hello(): void{
    console.log("Hello turma!!")
}
const hello1 = () => console.log("Hello turma!!")

console.log(message("Hello World"))

hello()
hello1()

// Valores Opcionais
function soma( a:number, b: number, c?:number): number{
    if(c){
        return a+b+c
    } else{
        return a + b
    }
}

const soma1 = ( a:number, b: number, c?:number): number => {
    if(c){
        return a+b+c
    } else{
        return a + b
    }
}