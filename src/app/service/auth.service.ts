import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }

    cadastrar(usuario: Usuario):Observable<Usuario>{
      return this.http.post<Usuario> ('https://vitalarte.herokuapp.com/usuarios/cadastrar', usuario)
    }
    logar(usuarioLogin: UsuarioLogin):Observable<UsuarioLogin>{
      return this.http.post<UsuarioLogin> ('https://vitalarte.herokuapp.com/usuarios/logar', usuarioLogin)
    }

    atualizar(usuario: Usuario):Observable<Usuario>{
      return this.http.put<Usuario> ('https://vitalarte.herokuapp.com/usuarios/alterar', usuario, this.token)
    }

    getUsuarioById(id: number): Observable<Usuario>{
      return this.http.get<Usuario>(`https://vitalarte.herokuapp.com/usuarios/${id}`, this.token)
    }


    logado() {
      let ok: boolean = false
      if(environment.token != '') {
        ok = true
      }
      return ok
    }

}
