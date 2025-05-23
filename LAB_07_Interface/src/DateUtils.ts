export class DateUtils{

    formatarData(data: Date, formato: string): string{
        let dataFormatada:string = ''
        let sepador = '/'

        let separadores: string[] = formato.split('/')
        if(separadores.length == 1){
            separadores = formato.split('-')
            sepador = '-'
        }
        let cont:number = 0
        for(let sep of separadores){
            cont ++
            if(sep == 'DD'){
                if(data.getDay() < 10){
                    dataFormatada += '0'
                }
                dataFormatada += data.getDay()
            }
            else if(sep == 'MM'){
                if(data.getMonth() < 10){
                    dataFormatada += '0'
                }
                dataFormatada += data.getMonth()
            }
            else if(sep == 'YYYY'){
                dataFormatada += data.getFullYear()
            }

            if(cont < 3){
                dataFormatada += sepador
            }
        }
        return dataFormatada
    }

    diferencaEmDias(dataInicial: Date, dataFinal: Date):number{
        const diffEmMs = dataFinal.getTime() - dataInicial.getTime();
        return diffEmMs / (1000 * 60 * 60 * 24);
    }

    adicionarDias(data: Date, dias: number): Date{
        data.setDate(data.getDate() + dias)
        return data
    }

    ehFinalDeSemana(data: Date): boolean{
        return data.getDay() >= 6
    }

    converterParaISO(data: Date): string{
        return data.toISOString()
    }
}