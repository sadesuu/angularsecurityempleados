import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, MaybeAsync, GuardResult } from '@angular/router';

export class AuthGuard implements CanActivate {

  constructor(private _router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if(sessionStorage.getItem("TOKEN")){
      return true
    }else{
      return this._router.createUrlTree(['/'], 
        {queryParams: {returnUrl: state.url}}
      )
    }
  }
}
