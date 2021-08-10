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
      state('on', style({
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
    window.scroll(0, 0)

    this.transicao()

    // Barra de tecnologias
    //Animação não funciona
    const root = document.documentElement
    const marqueeElementsDisplayed = 5
    const marqueeContent = document.querySelector("marquee-content")

    root.style.setProperty("--marquee-elements", "8")

    var i = 0

    for (i = 0; i < marqueeElementsDisplayed; i++) {
      if (marqueeContent != null) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
      }
    }
    // Barra de tecnologias


  }

  toggle() {
    this.estaAberto = !this.estaAberto
  }
  //-Todos estão abrindo de uma vez só, ver se eu consigo ajeitar essa animação ou se vai ser na base de criar uma animação pra cada um.

  transicao() {
    this.piscando = !this.piscando

    this.transicao()
  }



}
