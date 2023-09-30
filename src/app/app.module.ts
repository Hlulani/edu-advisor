import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PersonalInformationComponent } from './sign-up/personal-information/personal-information.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from "@angular/fire/compat"
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AdvisorPortalComponent } from './advisor-portal/advisor-portal.component'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    PersonalInformationComponent,
    LoginComponent,
    AdvisorPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
