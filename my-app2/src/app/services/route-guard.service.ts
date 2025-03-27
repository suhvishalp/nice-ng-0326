import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
class Permissions {

  constructor(private auth:AuthService, private router:Router){}

  canActivate(): boolean {
    if(this.auth.isLoggedIn()) {
      return true;
    }else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private permissions: Permissions) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    return this.permissions.canActivate();
  }


}
