import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage{
  conversas: {img: string, contato: string, ultimaMsg: string}[];
  constructor() {

    this.conversas = [
      {
        img: "https://pbs.twimg.com/media/CFgNPQhUgAA4SZb.jpg",
        contato: "Gessica",
        ultimaMsg: "Oi fake... ",
      },

      {
        img: "https://gartic.com.br/imgs/mural/jo/john_mustang/dog-p-menina25.png",
        contato: "Lorenzo",
        ultimaMsg: "OI...",
      },

      {
        img: "https://s3.amazonaws.com/assets.gocanvas.io/blog/_openGraph/Bitmoji-Share-Card.png?mtime=20180723231530",
        contato: "Cleide",
        ultimaMsg: "Neiva do ceu...",
      },

      {
        img: "https://i.pinimg.com/236x/79/40/f2/7940f2e6150caea2b94f4354a7d55a6b.jpg",
        contato: "Dr. claudia",
        ultimaMsg: "Marcado pra amanhã...",
      },

      {
        img: "https://i.pinimg.com/236x/04/35/94/0435945856d08cf5f205c3619f473a19--apps-branding.jpg",
        contato: "mãe",
        ultimaMsg: "Vai dar tudo certo...",
      },
    ];
  }
}