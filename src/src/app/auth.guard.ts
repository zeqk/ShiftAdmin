import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { user } from '@angular/fire/auth';
import { Observable, map, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return user(this.auth).pipe(
      take(1),
      map(u => {
        if (u) {
          return true;
        } else {
          this.router.navigate(['/auth']);
          return false;
        }
      })
    );
  }
}
