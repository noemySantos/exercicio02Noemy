import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  fotos: { imagem: string, descricao: string}[];
  constructor() {
    this.fotos = [
      {
        imagem: "https://www.belasmensagens.com.br/wp-content/uploads/2017/04/seja-seletivo-em-suas.jpg",
        descricao: "Paz",
      },

      {
        imagem: "https://www.42frases.com.br/wp-content/uploads/2018/07/se-deus.png",
        descricao: "Animo",
      },

      {
        imagem: "https://www.frasesdobem.com.br/wp-content/uploads/2019/09/e-deus-continua-sussurrando-1.png",
        descricao: "No depresion",
      },

      {
        imagem: "https://static.otvfoco.com.br/2019/02/neymar.jpg",
        descricao: "Paixao de noemy",
      },

        {
        imagem: "https://rockcontent.com/wp-content/uploads/2017/04/13-03-emoji-marketing-1280x720.png",
        descricao: "emoticon feliz",
      },

      {
        imagem: "https://img.elo7.com.br/product/zoom/D55EB1/emoji-20x20cm-papel-fotografico.jpg",
        descricao: "emoticon apaixonado",
      },

    ];
   }

  ngOnInit() {
    
  }

}
