import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private firestore: AngularFirestore) { }
  
  agregarcliente(cliente: any): Promise<any> {
    return this.firestore.collection('clientes').add(cliente);
  }

  getclientes(): Observable<any> {
    return this.firestore.collection('clientes').snapshotChanges();
  }
}
