import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productoUrl ="http://localhost:8080/producto/";

  constructor(private httpCliente: HttpClient) { }

  public lista():Observable<Producto[]>{
    return this.httpCliente.get<Producto[]>(this.productoUrl + 'list');
  }
  public detail(id: number):Observable<Producto>{
    return this.httpCliente.get<Producto>(this.productoUrl + `detail/${id}`);
  }
  public detailName(nombre: string):Observable<Producto>{
    return this.httpCliente.get<Producto>(this.productoUrl + `detailname/${nombre}`);
  }
  public save(producto: Producto):Observable<any>{
    return this.httpCliente.post<any>(this.productoUrl + `create`, producto);
  }
  public update(id:number, producto: Producto):Observable<any>{
    return this.httpCliente.put<any>(this.productoUrl + `update/${id}`, producto);
  }
  public delete(id:number):Observable<any>{
    return this.httpCliente.delete<any>(this.productoUrl + `delete/${id}`);
  }

}
