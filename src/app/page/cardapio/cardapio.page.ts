import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {

  pais = "brasil";
  pratosBrasil = [
    {
      foto: "assets/feijoada.png",
      nome: "Feijoada",
      preco: "25,00"
    },
    {
      foto: "assets/carne.jpeg",
      nome: "Carne de Sol",
      preco: "35,00"
    },
    {
      foto: "assets/acai.jpeg",
      nome: "Açaí",
      preco: "15,00"
    }
  ];
  pratosArgentina = [
    {
      foto: "assets/empanadas.webp",
      nome: "Empanadas Argentinas",
      preco: "12,00"
    },
    {
      foto: "assets/chorizo.webp",
      nome: " Chorizo com Fondue de Queijos e Batatas",
      preco: "28,00"
    },
    {
      foto: "assets/mezzalunas.webp",
      nome: "Medialunas",
      preco: "18,00"
    }
  ];
  pratosChile = [
    {
      foto: "assets/bife.webp",
      nome: "Bisteca a lo pobre",
      preco: "25,00"
    },
    {
      foto: "assets/pastel.webp",
      nome: "Pastel de Choclo",
      preco: "25,00"
    },
    {
      foto: "assets/chilenas.webp",
      nome: "Empanadas Chilenas",
      preco: "12,00"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
