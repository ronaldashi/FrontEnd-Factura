import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Detalle } from './detalle';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  private urlGet: string = "http://localhost:8080/getAllDetalles"
  private urlPost: string = "http://localhost:8080/detalle"
  private urlGetId: string = "http://localhost:8080/detalle"
  private urlPut: string = "http://localhost:8080/detalle"
  private urlDelete: string = "http://localhost:8080/detalle"

  pipe = new DatePipe('en-US');
  todayWithPipe = null;


  constructor(private http: HttpClient) { }

  //metodo para obtener los detalle
  detalle(): Observable<Detalle[]> {


    return this.http.get<Detalle[]>(this.urlGet);

  }

  //metodo para crear los detalle
  create(detalle: Detalle): Observable<Detalle> {
    return this.http.post<Detalle>(this.urlPost, detalle);
  }

  //metodo para obtener un solo detalle
  get(id_detalle: number): Observable<Detalle> {

    return this.http.get<Detalle>(this.urlGetId + '/' + id_detalle);
  }

  //metodo para modificar el detalle
  update(detalle: Detalle): Observable<Detalle> {
    return this.http.put<Detalle>(this.urlPut, detalle);
  }

  //metodo para eliminar el detalle
  delete(id_detalle: number): Observable<Detalle> {

    return this.http.delete<Detalle>(this.urlDelete + '/' + id_detalle);
  }
}
