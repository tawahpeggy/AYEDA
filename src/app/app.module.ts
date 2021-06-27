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





export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
