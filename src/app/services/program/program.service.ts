import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(
    private httpClient: HttpClient
  ) { }

  create() {
    this.httpClient.post('programs', {})
  }
}
