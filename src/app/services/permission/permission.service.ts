import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PermissionService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  getAll() {
    return  this.httpClient.get('permissions');
  }

  getRolesPermissions() {
    return  this.httpClient.get('permissions/roles');
  }

  update(body: object) {
     return this.httpClient.post('permissions', {prolesPermissions: {...body}});
  }
}
