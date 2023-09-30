
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisorPortalComponent } from './advisor-portal/advisor-portal.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [

  { path: 'register', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'advisor', component: AdvisorPortalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


