
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private firebaseAuthService: FirebaseAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginWthGoogle(){
    this.firebaseAuthService.signInWithGoogle().then((res: any) =>{
      this.router.navigateByUrl("advisor")

    }).catch((error: any) =>[
      console.error(error)
    ])
  }
}
