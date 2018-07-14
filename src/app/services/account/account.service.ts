import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AccountService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAccount() {
    return  this.httpClient.get('account');
  }
}
