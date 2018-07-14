import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  private static tokenKey = 'sch_token';
  constructor(
    private httpClient: HttpClient
  ) { }

  static setToken = (token: string) => {
    localStorage.setItem(AuthService.tokenKey, token);
  }

  static getToken = (): string => {
    return localStorage.getItem(AuthService.tokenKey);
  }

  login({email, password}) {
   return  this.httpClient.post('auth', {email, password});
  }
}
