import { Postagem } from "./Postagem"

export class Usuario{

    public id: number
    public nome: string
    public email: string 
    public senha: string
    public tipoConta: string
    public foto: string
    public biografia: string
    public postagens: Postagem[]
}