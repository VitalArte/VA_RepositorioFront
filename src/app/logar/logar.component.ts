import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(){
    window.scroll(0, 0)
  }

  logar() {
    this.auth.logar(this.usuarioLogin).subscribe(
      (resp: UsuarioLogin) => {
        this.usuarioLogin = resp

        environment.token= this.usuarioLogin.token
        environment.nome= this.usuarioLogin.nome
        environment.foto= this.usuarioLogin.foto
        environment.id= this.usuarioLogin.id
        environment.tipoConta= this.usuarioLogin.tipoConta
        environment.email= this.usuarioLogin.email

        this.router.navigate(['/feed'])
      },
      erro =>{
        if (erro.status == 500 || 401){
          alert('Email ou senha incorretos.')
        }
      }
    )

  }
}
