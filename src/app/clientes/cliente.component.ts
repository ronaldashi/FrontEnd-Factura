import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Factura } from '../factura/factura';
import { FacturaService } from '../factura/factura.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  titulo: string = "Lista de clientes";
  prueba: string = 'Esto es una prueba';

  facturas: any[] = [];
  clienteElegido: any = null;
  clientes: any[] = [];

  constructor(private facturaService: FacturaService, private clienteService: ClienteService) { }

  ngOnInit(): void {

    this.cliente();


  }

  cliente(): void {
    this.clienteService.cliente().subscribe(
      data => {
        this.clientes = data;
      },
      err => {
        console.log(err);
      }

    );

  }

  factura(): void {
    this.facturaService.facturas().subscribe(
      data => {
        this.clientes = data;
      },
      err => {
        console.log(err);
      }

    );
  }

  delete(cliente: Cliente): void {
    console.log("Hello");
    this.clienteService.delete(cliente.id_cliente).subscribe(

      c => this.clienteService.cliente().subscribe(
        res => this.clientes = res
      )
    )
  }

}
