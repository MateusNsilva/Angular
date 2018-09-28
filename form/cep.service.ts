import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class CepService {

  constructor(
    private http: HttpClient,
  ) { }

  searchCep(cep: number){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/unicode/`);
  }

}
