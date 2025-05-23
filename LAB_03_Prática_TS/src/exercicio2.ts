let produtos0: string[] = ["Arroz", "Feijão", "Leite", "Pão"]
while (produtos0.indexOf("Leite") > 0){
    produtos0[produtos0.indexOf("Leite")] = "Queijo"
}
produtos0.shift()
produtos0.push("Café")

console.log(`Lista de produtos: ${produtos0}`)