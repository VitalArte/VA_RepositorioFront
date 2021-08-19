import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  token = environment.token
  id = environment.id


  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]
  postagemEdit: Postagem = new Postagem()
  postagemCurtir: Postagem = new Postagem()
  deletePostagemId: number

  tema: Tema = new Tema()
  temaEdit: Tema = new Tema()
  listaTema: Tema[]


  feedBusca = false
  nomeUsuario: string

  usuario: Usuario = new Usuario()

  constructor(private router: Router,private postagemservice: PostagemService) { }

  ngOnInit(): void {
  }

  sair() {
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
    environment.email = ''
    environment.tipoConta = ''
    environment.biografia = ''
    this.router.navigate(['/'])

  }
  getPostagensByUsuario() {
    this.postagemservice.getUsuarioIdPostagens(this.usuario.id).subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
      this.feedBusca = false

      console.log(this.listaPostagem)
    })
  }

  getPostagensByUsuarioNome(){
    this.postagemservice.getUsuarioNomePostagens(this.nomeUsuario).subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
      // this.feedBusca = false

      console.log(this.listaPostagem)
    })
  }

}
