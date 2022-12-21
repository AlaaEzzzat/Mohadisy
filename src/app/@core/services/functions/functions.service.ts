import { HttpClient } from '@angular/common/http';
import { ProviderServiceService } from './../Provider/provider-service.service';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
@Injectable({
  providedIn: 'root',
})
export class FunctionsService {
  constructor(private provider:ProviderServiceService,private _HttpClient: HttpClient) {}
  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  chareacterOnly(evt: any): boolean {
    evt = evt ? evt : event;
    var charCode = evt.charCode
      ? evt.charCode
      : evt.keyCode
      ? evt.keyCode
      : evt.which
      ? evt.which
      : 0;
    if (
      charCode > 32 &&
      (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122)
    ) {
      if (charCode != 8) {
        if (charCode < 0x0600 || charCode > 0x06ff)
          return false;
      }
    }
    return true;
  }
  getTime(end: any, start: any) {
    var startDate = new Date(start);
    var endDate = new Date(end);
    var Time = endDate.getTime() - startDate.getTime();
    var Days = Time / (1000 * 3600 * 24);
    return Days;
  }
  download = (url: string, name: any) => {
    return this._HttpClient.get(url, { responseType: 'arraybuffer' }).subscribe(
      (png:any) => {
        const blob = new Blob([png], { type: 'application/pdf' });
        const fileName = name;
        saveAs(blob, fileName);
      }
    );
  };
}
