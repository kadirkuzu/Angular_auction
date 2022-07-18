import {Injectable} from '@angular/core';
import {User} from "../../app/Pages/login/User";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import Swal from "sweetalert2"

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient, private router: Router) {
  }

  loggedIn = false
  usersList: User[] = []
  user: User = {userName: "kadir", name: "kadir", secondName: "kuzu", id: 1, emailAdress: "", password: 1234}
  async login(forUser: User) {
    const users = await this.http.get('http://localhost:3000/users').toPromise();
    this.usersList = users as User[]
    for (let user of this.usersList) {
      if ((user.userName.toLowerCase() == forUser.userName.toLowerCase() || user.emailAdress.toLowerCase() == forUser.userName.toLowerCase()) && user.password == forUser.password) {
        localStorage.setItem("isLogged", String(user.id))
        await this.router.navigate(["home"])
        this.loggedIn = true
        console.log("logedın: " + this.loggedIn)
        await Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hesaba giriş yaptınız',
          showConfirmButton: false,
          timer: 1500
        })
        this.user = user
        return true
      }
    }
    Swal.fire({
      icon: 'error',
      title: 'Hata',
      text: 'Kullanıcı adı veya şifre hatalı',
    })
    return false
  }

  logOut() {
    localStorage.removeItem("isLogged")
    this.router.navigate(["login"])
    this.loggedIn = false
    console.log("logedın: " + this.loggedIn)
  }

  wait = false

  async signUp(userToAdd: User) {
    const users = await this.http.get('http://localhost:3000/users').toPromise();
    this.usersList = users as User[]
    for (let user of this.usersList) {
      if (user.userName == userToAdd.userName) {
        Swal.fire({
          icon: 'error',
          title: 'Hata',
          text: 'Bu kullanıcı adı kullanılıyor.'
        })
        return
      }
      if (user.emailAdress == userToAdd.emailAdress) {
        Swal.fire({
          icon: 'error',
          title: 'Hata',
          text: 'Bu e-mail zaten kullanılıyor.',
        })
        return
      }
    }
    const res = this.http.post('http://localhost:3000/users', userToAdd).toPromise()
    this.wait = true
  }

  async createId() {
    const users = await this.http.get('http://localhost:3000/users').toPromise();
    this.usersList = users as User[]
    let newId = 0
    for (let user of this.usersList) {
      if (user.id > newId) newId = user.id
    }
    return newId + 1
  }

  async findUser() {
    let id = localStorage.getItem("isLogged")
    let url = 'http://localhost:3000/users/' + id
    let user = await this.http.get(url).toPromise()
    return user
  }

  try() {
    console.log(this.loggedIn)
  }
}
