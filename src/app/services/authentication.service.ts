import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_BASE_URL, API_ENDPOINTS} from '../api.constant';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserroleService } from './userrole.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseurl=API_BASE_URL;
  

  adminrole= new BehaviorSubject<boolean>(false)
  userrole= new BehaviorSubject<boolean>(false)
  admin= new BehaviorSubject<boolean>(false)
  



  constructor(private http:HttpClient, private route:Router, private toast:ToastrService, private userroleservice:UserroleService) { }

  checkEmailExists(): Observable<string[]> {
    const url = `${API_BASE_URL}${API_ENDPOINTS.USERS}`;
    return this.http.get<any[]>(url).pipe(
      map((data) => {
        return data.map((item) => item.useremail);
      }))
  }

  addusers(value:any){
    const url=`${this.baseurl}${API_ENDPOINTS.USERS}`
    return this.http.post( url, value )
  }
  getusers(){
    const url=`${this.baseurl}${API_ENDPOINTS.USERS}`
    return this.http.get<any[]>(url).pipe(
      map((data) => {
        return data.filter((item) => item.userrole==='user');
      }))
  }
  
  checkemailforlogin(useremail:any):any{
    const url=`${this.baseurl}${API_ENDPOINTS.USERS}`
    return this.http.get<any[]>(url).pipe(
      map((data)=>{
        return data.find((item)=>item.useremail===useremail)
      })
    )
  }

  getloggedinuser(useremail:string, userpassword:string): any{
    const url=`${this.baseurl}${API_ENDPOINTS.USERS}`
    return this.http.get<any[]>(url).pipe(
      map((data)=>{return data.find((item)=>(item.useremail===useremail&&item.userpassword===userpassword)
        )})
    )
  }
  getloggedinuserrole(useremail:string, userpassword:string, role:string){
  if(role==="admin"){
    this.adminrole.next(true);
    this.admin.next(true);
  }else if(role==='user'){
    this.userrole.next(true);
  }else{
    this.userrole.next(false);
    this.adminrole.next(false);
    }
  }
  
  getuserbyid(id:number){
    const url=`${this.baseurl}${API_ENDPOINTS.USERS}`
    return this.http.get(`${url}/${id}`)
  }

  deleteuser(id:number){
    const url=`${this.baseurl}${API_ENDPOINTS.USERS}`
    return this.http.delete(`${url}/${id}`)
  }
  // checkuser(role:string){
  //   if(role==='admin'){
  //     this.admin.next(true);
  //   }else{
  //     this.admin.next(false);
  //   }
  // }
  clearcredential(){
    if(this.userrole){
      this.userrole.next(false);
      this.route.navigate(['/login']);
      localStorage.clear();
      this.toast.success("Logout Successfully");
    }
    else if(this.adminrole){
      this.adminrole.next(false);}
      localStorage.clear();
      this.route.navigate(['/login']);
      this.userroleservice.setUserRole;
      this.toast.success("Logout Successfully");
    }



}