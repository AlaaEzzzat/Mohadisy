import { IClientPayment } from './../../@models/IClientPayment';
import { ClientService } from './../../@core/services/client/client.service';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from './../../@core/services/payment/payment.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  payForm!: FormGroup;
  payMethodForm!: FormGroup;
  payData: any = {};
  PaymentMethodsList: any = {};
  second: boolean = false;
  client: any = {};
  clientPaymentData: IClientPayment = {} as IClientPayment;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private _toastr: ToastrService,
    private clientService: ClientService
  ) {
    this.payMethodForm = this.formBuilder.group({
      PaymentMethod: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.payData = this.payForm?.value;
    console.log(this.payForm?.value);
    this.paymentService.initiatePayment(this.payData).subscribe({
      next: (response: any) => {
        console.log(response);
        this._toastr.info(response.Message);
        this.PaymentMethodsList = response.Data.PaymentMethods;
        console.log(this.PaymentMethodsList);
        this.second = true;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  onMethodSubmit() {
    //الدفعه الأولي
    this.clientPaymentData.invoiceValue = 200;

    this.clientPaymentData.paymentMethodId = this.PaymentMethod?.value;
    this.clientPaymentData.customerName =
      this.client?.firstName + ' ' + this.client?.lastName;
    this.clientPaymentData.displayCurrencyIso = 'SAR';
    this.clientPaymentData.mobileCountryCode = '+996';
    this.clientPaymentData.customerMobile =
      this.client?.applicationUser.phoneNumber;
    this.clientPaymentData.customerEmail = this.client?.applicationUser.email;
    this.clientPaymentData.customerCivilId = this.client?.idNumber;

    this.clientPaymentData.callBackUrl = 'https://www.google.com';
    this.clientPaymentData.errorUrl = 'https://www.facebook.com';
    this.clientPaymentData.language = 'ar';
    console.log(this.clientPaymentData);
    this.paymentService.executePayment(this.clientPaymentData).subscribe({
      next: (response: any) => {
        console.log(response.Data);
        window.location.href = response.Data.PaymentURL;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  get PaymentMethod() {
    return this.payMethodForm.get('PaymentMethod');
  }

  ngOnInit(): void {
    this.clientService.getClientProfile().subscribe((data) => {
      console.log(data.data);
      this.client = data.data;
    });
  }
}
