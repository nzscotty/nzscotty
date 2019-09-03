import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { SendgridEmailService } from 'src/app/services/sendgrid.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class ContactComponent implements OnInit, AfterViewInit, OnChanges {

  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  subjectFormGroup: FormGroup;
  messageFormGroup: FormGroup;

  messageSending = false;
  sendSuccess = null;

  public targetInput = 'input0';

  constructor(private _formBuilder: FormBuilder, private emailService: SendgridEmailService) {}

  ngOnInit() {
    this.nameFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required]
    });
    this.emailFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.compose([Validators.required, Validators.email])]
    });
    this.subjectFormGroup = this._formBuilder.group({
      subjectCtrl: ['', Validators.required]
    });
    this.messageFormGroup = this._formBuilder.group({
      messageCtrl: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.setFocus();
  }

  submitContactForm() {
    this.messageSending = true;
       // tslint:disable-next-line: max-line-length
    this.emailService.sendEmail(this.emailFormGroup.controls.emailCtrl.value, this.subjectFormGroup.controls.subjectCtrl.value, this.messageFormGroup.controls.messageCtrl.value).subscribe(response => {
      this.sendSuccess = response;
    });
    this.messageSending = false;
  }

  private setFocus() {
    let targetElem = document.getElementById(this.targetInput);
    setTimeout(function waitTargetElem() {
      if (document.body.contains(targetElem)) {
        targetElem.focus();
      } else {
        setTimeout(waitTargetElem, 100);
      }
    }, 100);
  }

  ngOnChanges(changes: SimpleChanges): void {
    let index = String(changes.selectedIndex);
    this.targetInput = 'input' + index;
    this.setFocus();
  }

  // onChange(event: any) {
  //   let index = String(event.selectedIndex);
  //   this.targetInput = 'input' + index;
  //   this.setFocus();
  // }
}
