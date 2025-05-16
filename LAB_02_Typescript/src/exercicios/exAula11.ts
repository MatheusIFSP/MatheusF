function calcularMedia(notas: number[]): number {
    let soma = 0;
    for (let i = 0; i <= notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
} try (erro) {
    console.log ("Erro encontrado:", (erro as Error).message);
    return 0;
}