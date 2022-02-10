import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/Services/clientes.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {
  clientes: any[] = [];
  constructor(private _clienteServices: ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this._clienteServices.getclientes().subscribe(data => {
      this.clientes = [];
      data.forEach((element:any) => {
        this.clientes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });      
    })
  }
}
