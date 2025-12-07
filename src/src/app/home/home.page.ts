import { Component, inject, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, user } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {  

  public userDisplayName: string | null = null;
  user$ = user(this.auth);

  constructor(private auth: Auth, private router: Router) { }

  ngOnInit() {
    this.user$.subscribe(async user => {
      this.userDisplayName = user ? user.displayName : null;
      // Redirigir a /tabs si el login fue exitoso
      await this.router.navigate(['/tabs']);
    });
  }

  async loginWithGoogle() {
    try {
      const result = await signInWithPopup(this.auth, new GoogleAuthProvider());
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const token = credential.accessToken;
      }
      const user = result.user;
      console.log('User Info:', user);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error('Error during sign-in:', errorCode, errorMessage, email, credential);
    }
  }
}
