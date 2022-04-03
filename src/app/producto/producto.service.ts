import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlGet: string = "http://localhost:8080/getAllProducts"
  private urlPost: string = "http://localhost:8080/producto"
  private urlGetId: string = "http://localhost:8080/producto"
  private urlPut: string = "http://localhost:8080/producto"
  private urlDelete: string = "http://localhost:8080/producto"

  pipe = new DatePipe('en-US');
  todayWithPipe = null;


  constructor(private http: HttpClient) { }

  //metodo para obtener los producto
  producto(): Observable<Producto[]> {


    return this.http.get<Producto[]>(this.urlGet);

  }

  //metodo para crear los producto
  create(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.urlPost, producto);
  }

  //metodo para obtener un solo producto
  get(id_producto: number): Observable<Producto> {

    return this.http.get<Producto>(this.urlGetId + '/' + id_producto);
  }

  //metodo para modificar el producto
  update(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.urlPut, producto);
  }

  //metodo para eliminar el producto
  delete(id_producto: number): Observable<Producto> {

    return this.http.delete<Producto>(this.urlDelete + '/' + id_producto);
  }
}
