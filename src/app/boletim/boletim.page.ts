import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.page.html',
  styleUrls: ['./boletim.page.scss'],
})
export class BoletimPage {
  boletins: { disciplina: string, nota: number }[];
  media;
  boletim;
  constructor() {
    this.boletins = [
      {
        disciplina: "DDM",
        nota: 10,
      },

      {
        disciplina: "IHC",
        nota: 10,
      },

      {
        disciplina: "EMP",
        nota: 10,
      },

      {
        disciplina: "ES",
        nota: 10,
      },

      {
        disciplina: "PAW",
        nota: 10,
      },

      {
        disciplina: "BD",
        nota: 10,
      },

      {
        disciplina: "AL",
        nota: 10,
      },
    ];

    let soma = 0;
    for (let i of this.boletins) {
      soma = soma + i.nota;
    }
    // media = soma_todas_as_notas / qtd_notas
    this.media = {
      "total": soma / this.boletins.length,
    }
  }
  async excluir(boletim) {
    var i = this.boletins.indexOf(boletim);
    this.boletins.splice(i, 1);

  }

  ngOnInit() {

  }

}
