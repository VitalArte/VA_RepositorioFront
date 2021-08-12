import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
  animations: [
    trigger('mostrar', [
      state('fechado', style({
        display: 'none'
      })),
      state('aberto', style({
        display: 'block'
      })),
      transition('fechado => aberto', [
        animate('0s')
      ]),
    ]),
  ],
})
export class SobreComponent implements OnInit {

  estaAbertoV = false;
  estaAbertoI = false;
  estaAbertoT = false;
  estaAbertoA = false;
  estaAbertoL = false;


  constructor() { }

  ngOnInit() {
    window.scroll(0, 0)

  }

  toggleVini() {
    this.estaAbertoV = !this.estaAbertoV
  }

  toggleIcaro() {
    this.estaAbertoI = !this.estaAbertoI
  }

  toggleThana() {
    this.estaAbertoT = !this.estaAbertoT
  }

  toggleAna() {
    this.estaAbertoA = !this.estaAbertoA
  }

  toggleLe() {
    this.estaAbertoL = !this.estaAbertoL
  }
  // displayAbout() {
  //   let about = document.getElementById('sobreVini');
  //   about!.classList.toggle('animate__slideInDown')
  // }

}
