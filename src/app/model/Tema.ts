import { Postagem } from "./Postagem"

export class Tema{

    public id: number
    public tema: string
    public descricao: string
    public palavraChave: string
    public postagens: Postagem[]
}