import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-barrauser',
  templateUrl: './barrauser.component.html',
  styleUrls: ['./barrauser.component.css']
})
export class BarrauserComponent implements OnInit {


  usuario: Usuario = new Usuario()

  nome = environment.nome
  biografia = environment.biografia
  tipoConta = environment.tipoConta
  foto = environment.foto
  id = environment.id
  constructor() { }

  ngOnInit(): void {
  }

}
