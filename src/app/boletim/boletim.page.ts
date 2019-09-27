import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})
export class BoletimPage implements OnInit {
  boletim;
  media;
  constructor() { }

  ngOnInit() {
    this.boletim = [
      {
        "disciplina": "DDM",
        "nota": 10,
      },

      {
        "disciplina": "IHC",
        "nota": 10,
      },

      {
        "disciplina": "EMP",
        "nota": 9.5,
      },

      {
        "disciplina": "ES",
        "nota": 9.5,
      },
    ];
    this.media = {
      "total": 9.5,
    }
  }

}
