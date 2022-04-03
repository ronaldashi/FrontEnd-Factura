import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Factura } from './factura';
import { DatePipe } from '@angular/common';
import { Cliente } from '../clientes/cliente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private urlGet: string = "http://localhost:8080/"
  private urlPost: string = "http://localhost:8080/factura"
  private urlGetId: string = "http://localhost:8080/factura"
  private urlPut: string = "http://localhost:8080/factura"
  private urlDelete: string = "http://localhost:8080/factura"

  pipe = new DatePipe('en-US');
  todayWithPipe = null;


  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlGet).pipe(
      map(Facturas => Facturas as Cliente[])
    );
  }

  //metodo para obtener los clientes
  clientes(): Observable<any[]> {
    return this.http.get<any[]>(this.urlGet + "getAllClients");

  }

  //metodo para obtener los clientes
  facturas(): Observable<any[]> {
    return this.http.get<any[]>(this.urlGet + "getAllFacturas");

  }

  //metodo para crear las facturas
  create(id_cliente: number, factura: Factura): Observable<Factura> {
    return this.http.post<Factura>(id_cliente + '/' + this.urlPost, factura);
  }

  //metodo para obtener un solo factura por id
  get(num_factura: number): Observable<Factura> {

    return this.http.get<Factura>(this.urlGetId + '/' + num_factura);
  }

  //metodo para modificar la factura
  update(factura: Factura): Observable<Factura> {
    return this.http.put<Factura>(this.urlPut, factura);
  }

  //metodo para eliminar el factura
  delete(num_factura: number): Observable<Factura> {

    return this.http.delete<Factura>(this.urlDelete + '/' + num_factura);
  }
}
