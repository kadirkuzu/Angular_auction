import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AccountService} from "../../../Services/accountService/account.service";

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let logged = this.accountService.loggedIn
    if (logged || localStorage.getItem("isLogged")) return true
    this.router.navigate(["login"])
    return false
  }
}

