import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login/login.component';
import { authGuard } from './guard/auth.guard';
import { userauthGuard } from './guard/userauth.guard';
import { ContactComponent } from './components/pages/contact/contact.component';
import { blockGuard } from './guard/blockguard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', canActivate:[blockGuard], component: LoginComponent },
  { path: 'register',canActivate:[blockGuard], component: RegisterComponent },
  {path:'contact', component: ContactComponent},
  { path: 'user',canActivate:[userauthGuard], loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule) },
  { path: 'admin', canActivate:[authGuard], loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component:ErrorComponent} // Default route for unknown paths
]
 
@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
