import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';




const routes: Routes = [
  {
    path: 'contactUs', component: ContactUsComponent
  },
{
  path: '', component:HomeComponent
}];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

