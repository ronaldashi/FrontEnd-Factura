import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from './factura';
import { FacturaService } from './factura.service';
import { Cliente } from '../clientes/cliente';
import { ClienteService } from '../clientes/cliente.service';

@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styleUrls: ['./form-factura.component.css']
})
export class FormFacturaComponent implements OnInit {

  facturas: Factura = new Factura();



  titulo: string = "Registro de Factura";


  constructor(private clienteService: ClienteService, private facturaService: FacturaService, private router: Router, private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {

    this.activateRoute.params.subscribe(
      c => {
        let num_factura = c['num_factura'];
        if (num_factura) {
          this.facturaService.get(num_factura).subscribe(
            es => this.facturas = es
          )
        }
      }
    );
  }

  create(): void {

    console.log(this.facturas);
    this.activateRoute.params.subscribe(
      c => {
        let id_cliente = c['id_cliente'];

        this.facturaService.create(1, this.facturas).subscribe(
          res => this.router.navigate(['/facturas'])
        )
      }
    )
  }


  update(): void {
    console.log(this.facturas);
    this.activateRoute.params.subscribe(
      c => {
        let id_cliente = c['id_cliente'];

        this.facturaService.create(id_cliente, this.facturas).subscribe(
          res => this.router.navigate(['/facturas'])
        )
      }
    )
  }

}
