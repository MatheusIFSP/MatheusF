import express, {Request, Response} from "express"
import { produto } from "./produto"

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())

function hello ( req: Request, res: Response):void{
    res.status(200).send("Hello World!!")
}

function filtraProdutoPorID( req: Request, res: Response):void{
    try{
        let id = req.params.id
        res.status(200).json(
            { 
                ID: id
            }
        )
    }catch(e : unknown){
        if( e instanceof Error){
            res.status(400).json({
                message: "Favor informar o ID"
            })
        }
    }
}

function filtraProdutoPorNome( req: Request, res: Response):void{
    try{
        let nome = req.query.name
        res.status(200).json(
            {
                Nome: nome
            }
        )
    }catch(e:unknown){
        res.status(400).json({
            message: "Favor informar um nome válido."
        })
    }
}

function novoProduto( req: Request, res: Response):void{
    try{
        let data : any = req.body

        if(!data.id || !data.nome || !data.preco || !data.fabricante){
            throw new Error("Produto requer id, nome, preco e fabricante")
        }

        const Produto = new produto(data.id, data.nome, data.preco, data.fabricante)
        res.status(200).json( produto  )
    }catch(e:unknown){
        res.status(400).json({
            message: "Favor informar um objeto válido."
        })
    }
}

app.get("/api/hello", hello)
app.get("/api/product/:id", filtraProdutoPorID )
app.get("/api/product", filtraProdutoPorNome )
app.post("/api/product", novoProduto )

app.listen(PORT, ()=> console.log( `API em execução na URL http://localhost:${PORT}`))