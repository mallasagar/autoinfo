import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component'
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerComponent } from './components/customer/customer.component';
import { CategoryComponent } from './components/pages/category/category.component';
import { SnackComponent } from './components/pages/category/snack/snack.component';
// import { HighlightDirective } from './directives/mainlayout.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CustomerComponent,
    CategoryComponent,
    SnackComponent,
    // HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot( {timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,}),
      HttpClientModule,
      MatDialogModule
     
  ],
  providers: [],
  exports: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
