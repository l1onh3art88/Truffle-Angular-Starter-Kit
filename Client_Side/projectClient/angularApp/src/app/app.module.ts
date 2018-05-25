import { FormsModule } from '@angular/forms';
import { UserRepositoryService } from './domain/services/user-repository.service';
import { WindowRefService } from './domain/services/window-ref.service';
import { Web3Service } from './domain/services/web3.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http/';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [Web3Service,WindowRefService, UserRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
