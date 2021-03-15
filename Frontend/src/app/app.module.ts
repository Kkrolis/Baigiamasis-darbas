import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import { InterestCalcComponent } from './interest-calc/interest-calc.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { from } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    InterestCalcComponent,
    ChatComponent,
    MainPageComponent,
    NavbarComponent,
    RegistrationComponent
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
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function tokenGetter() {
  return localStorage.getItem('token');
}

