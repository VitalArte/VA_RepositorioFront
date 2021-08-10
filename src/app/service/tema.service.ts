import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

 token = {
   headers: new HttpHeaders().set('Authorization', environment.token)
 }

 getAllTema(): Observable<Tema[]> {
     return this.http.get<Tema[]>('https://vitalarte.herokuapp.com/temas')

  }

  getbyIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://vitalarte.herokuapp.com/temas/${id}`)

 }

  getNomeTema(nome: string): Observable<Tema[]> {
    return this.http.get<Tema[]>(`https://vitalarte.herokuapp.com/temas/nome/${nome}`)
  }

  getTopicoTema(topico: string): Observable<Tema[]> {
    return this.http.get<Tema[]>(`https://vitalarte.herokuapp.com/temas/topico/${topico}`)
  }
 postTema(tema: Tema): Observable<Tema>{
   return this.http.post<Tema>('https://vitalarte.herokuapp.com/temas', tema)
 }

 putTema(tema: Tema): Observable<Tema>{
  return this.http.put<Tema>('https://vitalarte.herokuapp.com/temas', tema)
}

deleteTema(id: number){
  return this.http.delete(`https://vitalarte.herokuapp.com/temas/${id}`)
}
}
