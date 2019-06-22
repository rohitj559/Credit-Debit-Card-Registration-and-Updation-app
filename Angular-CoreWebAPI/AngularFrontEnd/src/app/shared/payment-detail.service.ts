import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = 'http://localhost:60753/api';

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    // console.log(this.formData);
    // console.log(this.rootURL + '/PaymentDetails');
    return this.http.post(this.rootURL + '/PaymentDetails', this.formData);
  }
}
