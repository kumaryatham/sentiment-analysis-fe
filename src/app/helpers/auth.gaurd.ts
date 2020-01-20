import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthGaurd implements CanActivate{

    constructor(private router: Router, private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot) {
        const currentUser = this.authService.currentUserValue;

        if(currentUser) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
    
}