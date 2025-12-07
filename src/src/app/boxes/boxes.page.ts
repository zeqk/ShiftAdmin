import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { addDoc, collection, collectionData, CollectionReference, deleteDoc, updateDoc, doc, DocumentReference, Firestore } from '@angular/fire/firestore';
import { Box } from '../models/box.model';
import { Observable } from 'rxjs/internal/Observable';
import { AddBoxModalComponent } from './add-box-modal.component';
import { EditBoxModalComponent } from './edit-box-modal.component';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.page.html',
  styleUrls: ['./boxes.page.scss'],
  standalone: false
})
export class BoxesPage implements OnInit {

  boxes$: Observable<Box[]>;
  boxesCollection: CollectionReference;

  constructor(private firestore: Firestore, private modalController: ModalController) { 
      // get a reference to the user-profile collection
      this.boxesCollection = collection(this.firestore, 'boxes');

      // get documents (data) from the collection using collectionData
      this.boxes$ = collectionData(this.boxesCollection,{ idField: 'id' }) as Observable<Box[]>;
  }  

  ngOnInit() {
  }

  async openAddBoxModal() {
    const modal = await this.modalController.create({
      component: AddBoxModalComponent,
      componentProps: {}
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data && data.number) {
      addDoc(this.boxesCollection, { number: data.number }).then((documentReference: DocumentReference) => {
        console.log('Document added: ', documentReference);
      });
    }
  }
  
  async openEditBoxModal(box: Box) {
    console.log('Opening edit modal for box:', box);
    const modal = await this.modalController.create({
      component: EditBoxModalComponent,
      componentProps: { box }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      console.log('Modal data:', data);
      if (data.action === 'edit' && data.number !== undefined && box.id) {
        // Actualizar el box en Firestore
        const boxDocRef = doc(this.firestore, `boxes/${box.id}`);
        updateDoc(boxDocRef, { number: data.number });
      } else if (data.action === 'delete' && box.id) {
        // Eliminar el box en Firestore
        const boxDocRef = doc(this.firestore, `boxes/${box.id}`);
        deleteDoc(boxDocRef);
      }
    }
  }

}
