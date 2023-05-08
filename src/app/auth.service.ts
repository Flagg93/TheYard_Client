import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router:Router) { }

  private validateLogin(): boolean{
    return false;
  }

  public isAuthenticated():boolean{
    return this.validateLogin();
  }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(!(this.isAuthenticated())){
      this.router.navigate(['/']);
      return false;

    }
    return true;
  }
}
