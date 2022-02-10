import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/Services/clientes.service';

@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClientesComponent implements OnInit {
  createcliente: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
              private _clienteService: ClientesService,
              private router: Router) { 
    this.createcliente = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      fecha: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarcliente(){
    this.submitted = true;
    if(this.createcliente.invalid){
      return;
    }
    const cliente: any = {
      nombre: this.createcliente.value.nombre,
      apellido: this.createcliente.value.apellido,
      edad: this.createcliente.value.edad,
      fecha: this.createcliente.value.fecha,
      fechacreacion: new Date(),
      fechamodificar: new Date()
    }
    this._clienteService.agregarcliente(cliente).then(() => {
      console.log('cliente registrado con exito');
      this.router.navigate(['/list-clientes'])
    }).catch(error => {
      console.log(error); 
    })
  }
}
