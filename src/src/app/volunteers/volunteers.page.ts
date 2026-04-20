import { catchError, Observable, of, pipe } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { 
  addDoc, 
  collection, 
  collectionData, 
  CollectionReference, 
  deleteDoc, 
  doc, 
  DocumentReference, 
  Firestore, 
  updateDoc 
} from '@angular/fire/firestore';

import { Volunteer } from '../models/volunteer.model';
import { AddVolunteerModalComponent } from './add-volunteer-modal.component';
import { EditVolunteerModalComponent } from './edit-volunteer-modal.component';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.page.html',
  styleUrls: ['./volunteers.page.scss'],
  standalone: false
})
export class VolunteersPage implements OnInit {

  volunteers$: Observable<Volunteer[]>;
  volunteersCollection: CollectionReference;

  constructor(private firestore: Firestore, private modalController: ModalController) { 
    this.volunteersCollection = collection(this.firestore, 'volunteers');
    this.volunteers$ = (collectionData(this.volunteersCollection, { idField: 'id' }) as Observable<Volunteer[]>)
       .pipe(
        catchError(err => {
          console.error('Error loading volunteers:', err);
          return of([]);
        })
      );
  }

  ngOnInit() {
  }

  async openAddVolunteerModal() {
    const modal = await this.modalController.create({
      component: AddVolunteerModalComponent,
      componentProps: {}
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data && data.name) {
      addDoc(this.volunteersCollection, { name: data.name }).then((documentReference: DocumentReference) => {
        console.log('Document added: ', documentReference);
      }).catch(err => console.error('Error adding document:', err));
    }
  }

  
  
  async openEditVolunteerModal(volunteer: Volunteer) {
    console.log('Opening edit modal for volunteer:', volunteer);
    const modal = await this.modalController.create({
      component: EditVolunteerModalComponent,
      componentProps: { volunteer }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      console.log('Modal data:', data);
      if (data.action === 'edit' && data.name !== undefined && volunteer.id) {
        // Actualizar el volunteer en Firestore
        const volunteerDocRef = doc(this.firestore, `volunteers/${volunteer.id}`);
        updateDoc(volunteerDocRef, { name: data.name }).catch(err => console.error('Error updating document:', err));
      } else if (data.action === 'delete' && volunteer.id) {
        // Eliminar el volunteer en Firestore
        const volunteerDocRef = doc(this.firestore, `volunteers/${volunteer.id}`);
        deleteDoc(volunteerDocRef).catch(err => console.error('Error deleting document:', err));
      }
    }
  }


}
