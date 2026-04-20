import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-volunteer-modal',
  templateUrl: './add-volunteer-modal.component.html',
  standalone: false
})
export class AddVolunteerModalComponent {
  name: string = '';

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss({ name: this.name });
  }
}
