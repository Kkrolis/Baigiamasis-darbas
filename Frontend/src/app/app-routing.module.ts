import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuardService as AuthGuard } from './security/auth-guard.service';
import { RegistrationComponent } from './registration/registration.component';
import { LoanPostsPageComponent } from './loan-posts-page/loan-posts-page.component';
import { AddNewLoanPostComponent } from './add-new-loan-post/add-new-loan-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: SecurityComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'main_page', component: MainPageComponent, canActivate: [AuthGuard]},
  { path: 'loan_posts', component: LoanPostsPageComponent, canActivate: [AuthGuard]},
  { path: 'add_loan_post', component: AddNewLoanPostComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
