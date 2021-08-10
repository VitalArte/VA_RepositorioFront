import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario= new Usuario()
  confirmeSenha: string
  idUsuario: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(){
      if(environment.token == ''){
      alert('Sua sessão expirou, faça login novamente')
      this.router.navigate(['/entrar'])
    }

    this.idUsuario=this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)
  }

  findByIdUsuario(id: number) {
    this.authService.getUsuarioById(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  atualizar(){
    if(this.usuario.senha != this.confirmeSenha){

      alert('A confirmação de senha está errada!')

    }else{
      this.authService.atualizar(this.usuario).subscribe((resp:Usuario) => {
        this.usuario = resp
        this.router.navigate(['/logar'])
        alert('Perfil alterado com sucesso, faça o login.')
        environment.token= ''
        environment.nome= ''
        environment.id= 0
        environment.foto= 'https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png'
        environment.email= ''
        environment.tipoConta= ''
        environment.biografia= ''
      })
    }

  }

  confirmarSenha(event: any){
    this.confirmeSenha = event.target.value
  }
}
