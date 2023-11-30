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
import { ContactComponent } from './components/pages/contact/contact.component';
import { MatDialogModule } from '@angular/material/dialog';
// import { HighlightDirective } from './directives/mainlayout.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
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
