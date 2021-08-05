import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private router: Router, private postagemservice: PostagemService) { }
  postagem: Postagem=new Postagem()
  listaPostagem: Postagem[]

  ngOnInit() {

    this.getPostagens()
  }

  getPostagens(){
    this.postagemservice.getAllPostagens().subscribe((resp: Postagem[]) => {
    this.listaPostagem = resp
    console.log(this.listaPostagem)

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
}
