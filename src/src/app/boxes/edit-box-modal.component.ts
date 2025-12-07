import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Box } from '../models/box.model';

@Component({
  selector: 'app-edit-box-modal',
  templateUrl: './edit-box-modal.component.html',
  standalone: false
})
export class EditBoxModalComponent {
  @Input() box?: Box;
  number!: number;
  shiftType: 'full' | 'simple' = 'full';

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.number = this.box?.number ?? 0;
    this.shiftType = this.box?.shiftType ?? 'full';
  }

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss({ action: 'edit', number: this.number, shiftType: this.shiftType });
  }

  delete() {
    this.modalController.dismiss({ action: 'delete' });
  }
}
