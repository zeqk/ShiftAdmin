import { Component, OnInit } from '@angular/core';
import { Auth, user, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: false
})
export class AccountPage implements OnInit {

  public userDisplayName: string | null = null;
  user$ = user(this.auth);

  constructor(private auth: Auth, private router: Router) { }

  ngOnInit() {
    this.user$.subscribe(async user => {
      this.userDisplayName = user ? user.displayName : null;
    });
  }

  async logout() {
    try {
      await signOut(this.auth);
      // Aquí podrías redirigir al login si lo deseas
      
      await this.router.navigate(['/auth']);
      console.log('Sesión cerrada');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

}
