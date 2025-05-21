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
        const novoJogador = new jogador(data.id, data.nome, data.cpf, data.email, data.telefone, data.posicao)
        jogadores.push(novoJogador)
        res.status(200).json(novoJogador)
    } catch (e: unknown) {
    res.status(400).json ({ Message: (e as Error).message })
    }
}

function atualizarJogador (req: Request, res: Response): void {
    try{
        let id = Number(req.params.id);
        let data: any = req.body;
        for (let i = 0; i < jogadores.length; i++) {
            if (jogadores[i].id === id) {
                jogadores[i].nome = data.nome
                jogadores[i].cpf = data.cpf
                jogadores[i].email = data.email
                jogadores[i].telefone = data.telefone
                jogadores[i].posicao = data.posicao
                res.status(200).json({ Message: "Jogador atualizado com sucesso", jogador: jogadores[i]});
                return;
            }
        }
        res.status(404).json({ Message: "Jogador não encontrado" });
    } catch (e: unknown) {
        res.status(400).json ({ Message: (e as Error).message })
    }
}

function removerJogador (req: Request, res: Response): void {
    try {
        let id = Number(req.params.id);
        for (let i = 0; i < jogadores.length; i++) {
            if (jogadores[i].id === id) {
                jogadores.splice(i, 1);
                res.status(200).json({ Message: "Jogador removido com sucesso" });
                return;
            }
        }
        res.status(404).json({ Message: "Jogador não encontrado" });
    } catch (e: unknown) {
        res.status(400).json ({ Message: (e as Error).message })
}

app.get('/api/jogadores', listarJogadores)
app.get('/api/jogadores/:id', filtraJogador)
app.post('/api/jogadores', novoJogador)
app.put('/api/jogadores/:id', atualizarJogador)
app.delete('/api/jogadores/:id', removerJogador)
}
