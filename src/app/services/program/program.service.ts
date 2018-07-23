import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateProgram} from '@interfaces/requests/create-program';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(
    private httpClient: HttpClient
  ) { }

  create(body: CreateProgram) {
    console.log(body);
    return this.httpClient.post('program', body)
  }
}
