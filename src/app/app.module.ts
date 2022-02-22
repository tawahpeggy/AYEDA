import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CaroselComponent } from './components/carosel/carosel.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutCeoComponent } from './pages/about-ceo/about-ceo.component';
import { AboutAyedaComponent } from './pages/about-ayeda/about-ayeda.component';
import { AboutBoardComponent } from './pages/about-board/about-board.component';
import { LoginComponent } from './pages/Authentication/login/login.component';
import { LogoutComponent } from './pages/Authentication/logout/logout.component';
import { RegisterComponent } from './pages/Authentication/register/register.component';





export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    CaroselComponent,
    ContactUsComponent,
    AboutCeoComponent,
    AboutAyedaComponent,
    AboutBoardComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
       }
      })
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
