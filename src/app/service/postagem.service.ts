import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://vitalarte.herokuapp.com/postagens')
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`https://vitalarte.herokuapp.com/postagens/${id}`)
 }

  getTituloPostagens(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://vitalarte.herokuapp.com/postagens/titulo/${titulo}`)
  }

  getUsuarioNomePostagens(nome: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://vitalarte.herokuapp.com/postagens/usuario/${nome}`)
  }

  getUsuarioIdPostagens(id: number): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://vitalarte.herokuapp.com/postagens/usuario/id/${id}`)
  }

  postPostagens(postagem: Postagem): Observable<Postagem>{
   return this.http.post<Postagem>('https://vitalarte.herokuapp.com/postagens', postagem)
  }

  putPostagens(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://vitalarte.herokuapp.com/postagens', postagem)
  }

  curtir(id:number, postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>(`https://vitalarte.herokuapp.com/postagens/curtir/${id}`, postagem)
  }

  // descurtir(id:number, postagem: Postagem): Observable<Postagem> {
  //   return this.http.put<Postagem>(`https://vitalarte.herokuapp.com/postagens/descurtir/${id}`, postagem)
  // }

  deletePostagens(id: number){
    return this.http.delete(`https://vitalarte.herokuapp.com/postagens/${id}`)
  }
}
