// Lista de números
let numbers : number [] = [1 , 2 , 3 , 4 , 5];

// Lista de strings
let nomes : string [] = [" Ana " , " Jo ã o " , " Maria "];
let posJoao : number = nomes . indexOf (" Jo ã o ")
console . log ( posJoao )
nomes . splice ( posJoao , posJoao )

console . log ( nomes )

// Lista gen é rica ( usando Array < tipo >)
let idades : Array < number > = [20 , 30 , 40];

// Lista com tipos mistos ( usando Union Types )
let misto : ( number | string ) [] = [1 , " dois " , 3 , " quatro "];

let fruits : string [] = [" Ma ç ã " , " Banana "];
fruits . push (" Laranja ") ; // Adiciona no final
fruits . unshift (" Uva ") ; // Adiciona no in í cio


fruits . pop () ; // Remove o ú ltimo elemento (" Laranja ")
fruits . shift () ; // Remove o primeiro elemento (" Uva ")


console . log ( fruits [0]) ; // " Ma ç ã "
console . log ( fruits . length ) ; // 3
