import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  form = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    emailAdress: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    secondName: new FormControl("", [Validators.required]),
  })
}
