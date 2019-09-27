import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage {

  constructor() { }
    title = "Lista de tarefas";
    tarefas = [
      {
        "descricao": "Fazer cafe da manha",
        "horario": "10:00"
      },
  
      {
        "descricao": "Comer",
        "horario": "10:30"
      },
  
      {
        "descricao": "Estudar pra DDM",
        "horario": "15:00"
      },
  
      {
        "descricao": "Ir pro IFPI",
        "horario": "17:30"
      },
  
      {
        "descricao": "dormir",
        "horario": "23:30"
      },
  
    ];
  }
