import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RoleService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAll() {
    return  this.httpClient.get('roles');
  }
}
