import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PersonalInformationComponent } from './sign-up/personal-information/personal-information.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from "@angular/fire/compat"

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    PersonalInformationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
