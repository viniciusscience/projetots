import { FornecedorModel } from './../model/fornecedor-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from '../domain/fornecedor';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  private url = 'http://localhost:8080/fornecedor/';

  constructor(private http: HttpClient) {}

  consultar(): Observable<FornecedorModel[]> {
    return this.http.get<FornecedorModel[]>(this.url + 'consultar');
  }

  cadastrar(fornecedorModel: FornecedorModel): Observable<FornecedorModel> {
    return this.http.post<FornecedorModel>(
      this.url + 'cadastrar',
      fornecedorModel
    );
  }

  cegonha(): Observable<FornecedorModel> {
    return this.http.post<FornecedorModel>(this.url + 'cadastrar-randon', {});
  }

  alterar(id: string, model: FornecedorModel): Observable<FornecedorModel> {
    return this.http.put<FornecedorModel>(this.url + 'alterar/' + id, model);
  }

  remover(id: string): Observable<FornecedorModel> {
    return this.http.delete<FornecedorModel>(this.url + 'remover/' + id);
  }
}
