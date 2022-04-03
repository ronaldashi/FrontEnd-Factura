import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detalle } from './detalle';
import { DetalleService } from './detalle.service';

@Component({
  selector: 'app-form-detalle',
  templateUrl: './form-detalle.component.html',
  styleUrls: ['./form-detalle.component.css']
})
export class FormDetalleComponent implements OnInit {

  detalle: Detalle = new Detalle();
  titulo: string = "Registro de Detalle";


  constructor(private detalleService: DetalleService, private router: Router, private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.activateRoute.params.subscribe(
      c => {
        let id_detalle = c['id_detalle'];
        if (id_detalle) {
          this.detalleService.get(id_detalle).subscribe(
            es => this.detalle = es
          )
        }
      }
    );
  }

  create(): void {

    console.log(this.detalle);
    this.detalleService.create(this.detalle).subscribe(
      res => this.router.navigate(['/detalle'])
    )
  }


  update(): void {

    console.log(this.detalle);
    this.detalleService.create(this.detalle).subscribe(
      res => this.router.navigate(['/detalle'])
    )
  }

}
