import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private baseUrl = 'http://localhost:8080/api/inventario/productos'; // Gateway URL

  constructor(private http: HttpClient) {
  }

  obtenerProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  listarProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}

