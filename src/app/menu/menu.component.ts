import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

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

  constructor(private router: Router) { }

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

}
