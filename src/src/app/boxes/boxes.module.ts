import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoxesPageRoutingModule } from './boxes-routing.module';

import { BoxesPage } from './boxes.page';
import { AddBoxModalComponent } from './add-box-modal.component';
import { EditBoxModalComponent } from './edit-box-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoxesPageRoutingModule
  ],
  declarations: [BoxesPage, AddBoxModalComponent, EditBoxModalComponent]
})
export class BoxesPageModule {}
