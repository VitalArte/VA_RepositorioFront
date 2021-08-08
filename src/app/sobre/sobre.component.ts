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

    trigger('piscar', [
      state('on', style ({
        opacity: '100%'
      })),
      state('off', style({
        opacity: '0%'
      })),
      transition('on => off, off => on', [
        animate('0.5s')
      ])

    ])
  ],
})
export class SobreComponent implements OnInit {

  estaAberto = false;
  piscando = true


  constructor() { }

  ngOnInit() {
    window.scroll(0,0)

    // this.transicao()

  }

  toggle() {
    this.estaAberto = !this.estaAberto
  }
  //-Todos estão abrindo de uma vez só, ver se eu consigo ajeitar essa animação ou se vai ser na base de criar uma animação pra cada um.

  transicao() {
    while (!this.estaAberto) {
      this.piscando = !this.piscando

    }
  }

}
