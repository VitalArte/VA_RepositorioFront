import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{

    public id: number
    public titulo: string
    public corpo: string
    public hashtags: string
    public curtidas: number
    public data: Date
    public multimidia: string
    public usuario: Usuario
    public tema: Tema
}