import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolunteersPageRoutingModule } from './volunteers-routing.module';

import { VolunteersPage } from './volunteers.page';
import { AddVolunteerModalComponent } from './add-volunteer-modal.component';
import { EditVolunteerModalComponent } from './edit-volunteer-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolunteersPageRoutingModule
  ],
  declarations: [VolunteersPage, AddVolunteerModalComponent, EditVolunteerModalComponent]
})
export class VolunteersPageModule {}
