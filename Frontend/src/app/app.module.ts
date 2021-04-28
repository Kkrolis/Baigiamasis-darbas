import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';

// my components
import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import { InterestCalcComponent } from './interest-calc/interest-calc.component';
import { ChatComponent } from './chat/chat.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutDialogComponent } from './dialogs/logout-dialog/logout-dialog.component';
import { InvalidLoginComponent } from './dialogs/invalid-login/invalid-login.component';
import { UserMenuComponent } from './menus/user-menu/user-menu.component';
import { SidenavComponent } from './menus/sidenav/sidenav.component';
import { LoanPostsPageComponent } from './loan-posts-page/loan-posts-page.component';
import { RegistrationSuccesComponent } from './dialogs/registration-succes/registration-succes.component';
import { AddNewLoanPostComponent } from './add-new-loan-post/add-new-loan-post.component';
import { LoanPostDialogComponent } from './dialogs/loan-post-dialog/loan-post-dialog.component';
import { NotificationDialogComponent } from './dialogs/notification-dialog/notification-dialog.component';

import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NOTE: Angular material imports
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import { MessagingDialogComponent } from './dialogs/messaging-dialog/messaging-dialog.component';







@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    InterestCalcComponent,
    ChatComponent,
    MainPageComponent,
    NavbarComponent,
    RegistrationComponent,
    LogoutDialogComponent,
    InvalidLoginComponent,
    UserMenuComponent,
    SidenavComponent,
    LoanPostsPageComponent,
    RegistrationSuccesComponent,
    AddNewLoanPostComponent,
    LoanPostDialogComponent,
    NotificationDialogComponent,
    MessagingDialogComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:4200']
      }
    }),
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDialogModule,
    MatMenuModule,
    MatSidenavModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function tokenGetter() {
  return localStorage.getItem('token');
}

