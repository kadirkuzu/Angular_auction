import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../../../Services/accountService/account.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {User} from "../login/User";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public accountService:AccountService,public router:Router) {
  }

  async ngOnInit():Promise<void> {
    const newId=await this.accountService.createId()
    this.form.patchValue({id:newId})
  }

  form = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    emailAdress: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    secondName: new FormControl("", [Validators.required]),
  })
  async signUp(){
    const user = this.form.value
    await this.accountService.signUp(user)
    if (!this.accountService.wait) return
    this.form.reset({id: this.accountService.createId()})
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Kişi Eklendi',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(["login"])
    this.accountService.wait=false
  }


}
