import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SendgridEmailService {

  constructor(private http: HttpClient) {
  }

  to = "cameron.mark.scott@gmail.com";
  url = "https://sendgridsendemail.azurewebsites.net/api/sendEmail?code=MRFSSVvdWB2amIIemd0NfsBbcePmWCEm0bPHLnnveG5ZZQnfkDkkQA==";

  isSending = null;

  sendEmail(from: string, subject: string, message: string): Observable<boolean> {

    const body = `{
        "to": ${this.to},
        "from": ${from},
        "subject": ${subject},
        "message": ${message}
    }`;

    this.isSending = true;

    this.http.post(this.url, body).subscribe(response => {
      console.log(response.toString());
      this.isSending = response.toString() === 'success' ? false : true;
    });
    return this.isSending;
  }


}




