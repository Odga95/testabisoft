import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'user',pathMatch: 'full'},
  {path: 'user', component: ListUserComponent},
  {path: 'add-user', component: CreateUserComponent},
  {path: '**', redirectTo: 'user',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
