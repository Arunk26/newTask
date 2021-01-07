import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { UserIdComponent } from './user-id/user-id.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'',redirectTo:'/button',pathMatch: `full`},
  {path: 'user', component : UserComponent},
  {path: 'button', component : ButtonComponent},
  {path: 'user/:id', component : UserIdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
