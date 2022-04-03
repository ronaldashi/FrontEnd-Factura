import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlGet: string = "http://localhost:8080/"
  private urlPost: string = "http://localhost:8080/clientes"
  private urlGetId: string = "http://localhost:8080/clientes"
  private urlPut: string = "http://localhost:8080/clientes"
  private urlDelete: string = "http://localhost:8080/clientes"

  pipe = new DatePipe('en-US');
  todayWithPipe = null;


  constructor(private http: HttpClient) { }

  //metodo para obtener los clientes
  cliente(): Observable<any[]> {
    return this.http.get<any[]>(this.urlGet + "getAllClients");

  }

  //metodo para obtener los clientes
  factura(): Observable<any[]> {
    return this.http.get<any[]>(this.urlGet + "getAllFacturas");

  }

  //metodo para crear los clientes
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlPost, cliente);
  }

  //metodo para obtener un solo cliente
  get(id_cliente: number): Observable<Cliente> {

    return this.http.get<Cliente>(this.urlGetId + '/' + id_cliente);
  }

  //metodo para modificar el cliente
  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.urlPut, cliente);
  }

  //metodo para eliminar el cliente
  delete(id_cliente: number): Observable<Cliente> {

    return this.http.delete<Cliente>(this.urlDelete + '/' + id_cliente);
  }
}
