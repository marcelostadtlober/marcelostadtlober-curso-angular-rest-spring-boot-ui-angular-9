import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';
import { MoneyHttp } from 'app/seguranca/money-http';

@Injectable()
export class CategoriaService {

  categoriaUrl: string;

  constructor(private http: MoneyHttp) {
    this.categoriaUrl = `${environment.apiUrl}/categorias`;
  }

  listarTodas(): Promise<any> {
    return this.http.get(this.categoriaUrl)
      .toPromise();
  }

}
