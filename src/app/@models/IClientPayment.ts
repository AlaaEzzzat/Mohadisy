export interface IClientPayment {
  invoiceValue: any;
  paymentMethodId: any;
  customerName: string;
  callBackUrl?: string;
  errorUrl?: string;
  displayCurrencyIso: string;
  mobileCountryCode: string;
  customerMobile: string;
  customerEmail: string;
  language?: string;
  customerReference?: string;
  customerCivilId: string;
}
