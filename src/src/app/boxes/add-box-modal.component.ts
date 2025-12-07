import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-box-modal',
  templateUrl: './add-box-modal.component.html',
  standalone: false
})
export class AddBoxModalComponent {
  number: number = 1;
  shiftType: 'full' | 'simple' = 'full';

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss({ number: this.number, shiftType: this.shiftType });
  }
}
