import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { VegpizzasComponent } from './pizzas/vegpizzas/vegpizzas.component';
import { NonvegpizzasComponent } from './pizzas/nonvegpizzas/nonvegpizzas.component';
import { CarteditemsComponent } from './carteditems/carteditems.component';

const routes: Routes = [
  {path:'', redirectTo:'/home' , pathMatch:'full'},
  {path:'login',  component:LoginComponent},
  {path:'home',  component:HomeComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'vegpizzas', component:VegpizzasComponent},
  {path: 'nonvegpizzas', component:NonvegpizzasComponent},
  {path: 'carteditems', component:CarteditemsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
