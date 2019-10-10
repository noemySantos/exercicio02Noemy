import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage {
  tarefas: { descricao: string, horario: string }[];

  constructor(public alertController: AlertController, public toastController: ToastController) {
    this.tarefas = [
      {
        descricao: "Acordar",
        horario: "07:00"
      },

      {
        descricao: "Tomar café",
        horario: "8:30"
      },

      {
        descricao: "ir trabalhar",
        horario: "8:45"
      },

      {
        descricao: "Almoçar",
        horario: "12:30"
      },

      {
        descricao: "Descançar",
        horario: "13:00"
      },

      {
        descricao: "Estudar pra DDM",
        horario: "14:00"
      },

      {
        descricao: "Ir pro IFPI",
        horario: "17:30"
      },

      {
        descricao: "dormir",
        horario: "23:30"
      },

    ];
  }
  async excluir(tarefa) {
    let alert = await this.alertController.create({
      header: 'Toast header',
      message: 'Deseja excluir a tarefa?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        },
        {
          text: 'Sim',
          handler: async () => {
            var i = this.tarefas.indexOf(tarefa);
            this.tarefas.splice(i, 1);
           
            const toast = await this.toastController.create({
              message: 'Tarefa excluida com sucesso!',
              duration: 5000,
            });

            toast.present();

          }

        }
      ]
    });

    await alert.present();
  }
}
