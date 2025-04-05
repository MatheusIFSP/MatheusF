type Pessoa = {
    nome: string;
    idade: number;
  };
  
  const pessoas: Pessoa[] = [
  { nome: "Ana", idade: 30 },
  { nome: "João", idade: 20 },
  { nome: "Maria", idade: 25 },
  { nome: "Carlos", idade: 18 }
  ];
  
  let resultado1 = pessoas.filter( f => f.nome == "Ana")
  console.log(resultado1)
  
  type Produto = {
      nome: string;
      estoque: number;
  };
  
  let produtos: Produto[] = [
  { nome: "Camiseta", estoque: 5 },
  { nome: "Calça", estoque: 0 },
  { nome: "Tênis", estoque: 2 },
  { nome: "Boné", estoque: 0 }
  ];
  
  
  console.log(pessoas[0]["nome"]);