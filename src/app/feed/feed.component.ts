import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private router: Router, private postagemservice: PostagemService, private temaservice: TemaService, private authservice: AuthService) { }

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]
  postagemEdit: Postagem = new Postagem()
  postagemCurtir: Postagem = new Postagem()
  deletePostagemId: number

  tema: Tema = new Tema()
  temaEdit: Tema = new Tema()
  listaTema: Tema[]

  feedBusca = false


  usuario: Usuario = new Usuario()
  nomeUsuario: string

  key = 'datahora'
  reverse = true

  ngOnInit() {

    this.getPostagens()
    this.getAllTemas()
    this.getUsuarioById()
  }

  getPostagens() {
    this.postagemservice.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
      this.feedBusca = false
      console.log(this.listaPostagem)

    })
  }

  getByIdPostagens(id: number) {
    this.postagemservice.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagemEdit = resp
      this.deletePostagemId = this.postagemEdit.id
      console.log(this.postagemEdit)

    })
  }

  getByIdPostagensCurtir(id: number) {
    this.postagemservice.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagemCurtir = resp
      console.log(this.postagemCurtir)

    })
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

  // getPostagensByTema() {
  //   if(this.descricaoTema == null) {
  //     this.getAllTemas()
  //     this.feedBusca = false

  //   }

  //   this.temaservice.getTopicoTema(this.descricaoTema).subscribe((resp: Tema[]) => {
  //     this.listaTema = resp
  //     this.feedBusca = true
  //   })
  // }

  getAllTemas() {
    this.temaservice.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTema = resp
    })
  }

  getByIdTema(id: number) {
    this.temaservice.getbyIdTema(id).subscribe((resp: Tema) => {
      this.temaEdit = resp
      console.log(this.temaEdit)
    })
  }

  cadastrar() {
    this.postagem.usuario = this.usuario
    this.postagem.tema = this.temaEdit
    this.postagemservice.postPostagens(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      console.log(this.postagem)
      this.postagem = new Postagem()
      this.getPostagens()
    })
  }

  atualizarPostagem(id: number) {
    this.getByIdPostagens(id)
    this.postagemservice.putPostagens(this.postagemEdit).subscribe((resp: Postagem) => {
      this.postagemEdit = resp
      alert('Postagem alterada com sucesso.')
      this.getPostagens()
      this.postagemEdit = new Postagem()
    })
  }

  curtindo() {
    this.postagemservice.curtir(this.postagemCurtir.id, this.postagemCurtir).subscribe((resp: Postagem) => {
      this.postagemCurtir = resp
      console.log(this.postagemCurtir)
      this.getPostagens()
      this.postagemCurtir = new Postagem()
    })
  }

  // descurtindo() {
  //   this.postagemservice.descurtir(this.postagemCurtir.id, this.postagemCurtir).subscribe((resp: Postagem) => {
  //     this.postagemCurtir = resp
  //     this.getPostagens()
  //     this.postagemCurtir = new Postagem()
  //   })
  // }

  apagarPostagem() {
    this.postagemservice.deletePostagens(this.deletePostagemId).subscribe(() => {
      alert('A postagem foi apagada com sucesso.')
      this.getPostagens()
    })
  }


  getUsuarioById() {
    this.authservice.getUsuarioById(environment.id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }
}
