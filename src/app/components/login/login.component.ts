import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  signInWithGoogle() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCredential) => {
        console.log('Signed up with Google:', userCredential);
        localStorage.setItem('demo', JSON.stringify(userCredential.credential));
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
