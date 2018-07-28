import { Injectable } from '@angular/core';
import {CreateSchool} from '@interfaces/requests/create-school';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SchoolService {

  constructor(
    private httpClient: HttpClient
  ) { }

  create(body: CreateSchool) {
    return this.httpClient.post('school', body);
  }
}
