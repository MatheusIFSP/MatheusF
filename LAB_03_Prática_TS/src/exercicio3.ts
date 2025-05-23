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