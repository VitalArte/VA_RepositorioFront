import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private router: Router, private postagemservice: PostagemService, private temaservice: TemaService) { }
  postagem: Postagem=new Postagem()
  listaPostagem: Postagem[]
  postagemEdit: Postagem = new Postagem ()
  temaEdit: Tema = new Tema ()
  listaTema: Tema[]
  deletePostagemId: number

  ngOnInit() {

    this.getPostagens()
    this.getAllTemas()
  }

  getPostagens(){
    this.postagemservice.getAllPostagens().subscribe((resp: Postagem[]) => {
    this.listaPostagem = resp
    console.log(this.listaPostagem)

    })
  }

  getByIdPostagens(id: number){
    this.postagemservice.getByIdPostagem(id).subscribe((resp: Postagem) => {
    this.postagemEdit = resp
    this.deletePostagemId = this.postagemEdit.id
    console.log(this.postagemEdit)

    })
  }

  getAllTemas(){
    this.temaservice.getAllTema().subscribe((resp: Tema[]) => {
    this.listaTema = resp
    })
  }

  getByIdTema (id:number){
    this.temaservice.getbyIdTema(id).subscribe((resp: Tema) =>{
      this.temaEdit = resp
      console.log (this.temaEdit)
    })
  }

  cadastrar(){
    this.postagemservice.postPostagens(this.postagem).subscribe((resp: Postagem)=> {
      this.postagem= resp

      console.log(this.postagem)
      this.postagem = new Postagem()
      this.getPostagens()


    })
}

atualizarPostagem (id: number){
  this.getByIdPostagens (id)
  this.postagemservice.putPostagens(this.postagemEdit).subscribe((resp: Postagem)=> {
    this.postagemEdit = resp
    alert ('Postagem alterada com sucesso.')
    this.getPostagens()
    this.postagemEdit = new Postagem()
  })
  }

apagarPostagem (){
  this.postagemservice.deletePostagens(this.deletePostagemId).subscribe(()=>{
    alert ('A postagem foi apagada com sucesso.')
    this.getPostagens()
  })
}
}
