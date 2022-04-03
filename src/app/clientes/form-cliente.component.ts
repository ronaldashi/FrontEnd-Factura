import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  clientes: Cliente = new Cliente();
  titulo: string = "Registro del Cliente";


  constructor(private clienteService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.activateRoute.params.subscribe(
      c => {
        let id_cliente = c['id_cliente'];
        if (id_cliente) {
          this.clienteService.get(id_cliente).subscribe(
            es => this.clientes = es
          )
        }
      }
    );
  }

  create(): void {

    console.log(this.clientes);
    this.clienteService.create(this.clientes).subscribe(
      res => this.router.navigate(['/clientes'])
    )
  }


  update(): void {

    console.log(this.clientes);
    this.clienteService.create(this.clientes).subscribe(
      res => this.router.navigate(['/clientes'])
    )
  }

}
