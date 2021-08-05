import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {


  tema: Tema = new Tema()
  listaTemas: Tema[]
  temasNome: Tema[]
  temasTopico: Tema[]

  constructor(
    private temaService: TemaService ,
    private router: Router
  ) { }

  ngOnInit(){
  //  if(environment.token=='') {
  //    alert('Sua sessão expirou, faça login novamente')
  //    this.router.navigate(['/logar'])
  //  }

  }


  getAllTemas() {
     this.temaService.getAllTema().subscribe((resp: Tema[])=> {
       this.listaTemas = resp
     })
  }

  findNomeTema(nome: string){

    this.temaService.getNomeTema(nome).subscribe((resp: Tema[])=>{
    this.temasNome = resp

    } )

  }
  findTopicoTema(topico: string){

    this.temaService.getTopicoTema(topico).subscribe((resp: Tema[])=>{
    this.temasTopico = resp

    } )

  }

   cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=> {
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      console.log(this.tema)
      this.getAllTemas()
      this.tema = new Tema()


    })


   }


}
