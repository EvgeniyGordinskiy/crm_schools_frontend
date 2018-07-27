import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PaymentService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  savePaymentsSettings(body: object) {
    return this.httpClient.post('payment', body);
  }
}
