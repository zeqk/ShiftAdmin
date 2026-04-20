import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Volunteer } from '../models/volunteer.model';

@Component({
  selector: 'app-edit-volunteer-modal',
  templateUrl: './edit-volunteer-modal.component.html',
  standalone: false
})
export class EditVolunteerModalComponent {
  @Input() volunteer?: Volunteer;
  name!: string;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.name = this.volunteer?.name ?? '';
  }

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss({ action: 'edit', name: this.name });
  }

  delete() {
    this.modalController.dismiss({ action: 'delete' });
  }
}
