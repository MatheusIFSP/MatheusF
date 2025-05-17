import express, { Request, Response } from "express";
import { jogador } from "./jogadores";

const app = express()
const PORT = process.env.PORT ?? 3000

app.use (express.json())

let jogadores: jogador[] = [];

function listarJogadores(req: Request, res: Response): void{
    console.log(jogadores.length);
    res.json(jogadores);
}

function filtraJogador (req: Request, res: Response): void{
    try {
        let id = req.params.id
        res.status(200).json({ id: id })
    } catch (e: unknown) {
        res.status(400).json({ Message: "Necessário informar o ID" })
    }
}
function novoJogador (req: Request, res: Response): void {
    try {
        let data: any = req.body
        const id = jogadores.length + 1;
    
    const novoJogador = new jogador (data.id, data.nome, data.cpf, data.email, data.telefone, data.posicao)
    jogadores.push(novoJogador)
    res.status(200).json(jogador)
    } catch (e: unknown) {
    res.status(400).json ({ Message: (e as Error).message })
}

function atualizarJogador (req: Request, res: Response): void {
    try{
        let id = req.params.id
        let data: any = req.body
        
    } catch (e: unknown) {
        res.status(400).json ({ Message: (e as Error).message })
}

app.get('/api/jogadores', listarJogadores)
app.get('/api/jogadores/:id', filtraJogador)
app.post('/api/jogadores', novoJogador)
app.put('/api/jogadores/:id', atualizarJogador)

}
}
