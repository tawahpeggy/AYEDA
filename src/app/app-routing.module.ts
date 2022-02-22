import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAyedaComponent } from './pages/about-ayeda/about-ayeda.component';
import { AboutBoardComponent } from './pages/about-board/about-board.component';
import { AboutCeoComponent } from './pages/about-ceo/about-ceo.component';
import { LoginComponent } from './pages/Authentication/login/login.component';
import { LogoutComponent } from './pages/Authentication/logout/logout.component';
import { RegisterComponent } from './pages/Authentication/register/register.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';




const routes: Routes = [
  {
    path: 'contactUs', component: ContactUsComponent
  },
{
  path: '', component:HomeComponent
},
  {
    path:"aboutAyeda", component:AboutAyedaComponent
  },
  {
    path:"aboutBoard", component:AboutBoardComponent
  },
  {
    path:"aboutCEO", component:AboutCeoComponent
  },
  {
    path:"register", component:RegisterComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"logout", component:LogoutComponent
  }

];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

