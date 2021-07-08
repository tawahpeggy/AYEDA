import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor(private fb : FormBuilder) {
  }

myForm: FormGroup | any
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ' ',
      email: ' ',
      phoneNumber: ' ',
      message: ' ',
    })
    this.myForm.valueChanges.subscribe(console.log)
  }

}
