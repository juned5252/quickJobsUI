import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { JobComponent } from './job/job.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobslistComponent } from './jobslist/jobslist.component';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    FooterComponent,
    SigninComponent,
    JobComponent,
    PageNotFoundComponent,
    JobslistComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
