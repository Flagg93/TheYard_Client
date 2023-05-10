import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router:Router, public server:ServerService) { }

  private validateLogin(): boolean{
    return false;
  }

  public Login(email: string, pass:string){
    let cred:string = "{email:'" + email +"', password:'" + pass + "'}" 
    this.server.postRequest("Logins", cred);

  }

  public CreateUser(email:string, pass:string, fullName:string, displayName:string){

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
