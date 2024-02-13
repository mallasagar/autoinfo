import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login/login.component';
import { authGuard } from './guard/auth.guard';
import { userauthGuard } from './guard/userauth.guard';
import { blockGuard } from './guard/blockguard';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '',  loadChildren:()=>import('./components/customer/customer.module').then((m)=>m.CustomerModule)},
  { path: 'login', canActivate:[blockGuard], component: LoginComponent },
  { path: 'register',canActivate:[blockGuard], component: RegisterComponent },
  { path: 'user',canActivate:[userauthGuard], loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule) },
  { path: 'admin', canActivate:[authGuard], loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: 'home',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component:ErrorComponent} // Default route for unknown paths
]
 
@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules}),HttpClientModule, FormsModule ],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
