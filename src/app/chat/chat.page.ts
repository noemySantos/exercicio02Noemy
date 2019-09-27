import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage{
  conversas;
  constructor() {

    this.conversas = [
      {
        "img": "https://pbs.twimg.com/media/CFgNPQhUgAA4SZb.jpg",
        "contato": "Maria",
        "ultimaMsg": "Oi fake... ",
      },

      {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlm1fA6B3WGWqiisD8Irb1PGajbFIuvOX1XOruCg9QV7YFZ2m",
        "contato": "Pedro",
        "ultimaMsg": "Oi tudo bem?",
      },

      {
        "img": "https://i.pinimg.com/originals/9b/20/01/9b20011e8a3755e3e13a22971efbe206.jpg",
        "contato": "Cleide",
        "ultimaMsg": "Neiva do ceu...",
      },
    ];
  }
}