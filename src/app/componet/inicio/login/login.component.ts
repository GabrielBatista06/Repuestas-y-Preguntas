import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(private fb: FormBuilder) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }
  ngOnInit(): void {}

  log(): void{
    console.log(this.login)
  }
}
