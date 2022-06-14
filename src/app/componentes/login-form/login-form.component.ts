import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
 form!:FormGroup;
  constructor() {
    this.buildForm();
   }

  ngOnInit(): void {
    
  }
  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      text: new FormControl('', [Validators.maxLength(200)]),
      category: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
    });

    this.form.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }

}
