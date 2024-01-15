 import { Injectable } from '@angular/core';
 import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: AngularFireAuth) { }

  login(email:string, senha:string) {
    return this.auth.signInWithEmailAndPassword(email, senha);
  }
  cadastro(email:string, senha:string) {
    return this.auth.createUserWithEmailAndPassword(email, senha);
  }
}
