export class UserModel {
    username:string;
    useraddress:string;
    usergender:string;
    userage:string;
    usercontact:string;
    useremail: string;
    userrole:string;
    userpassword: string;
  
    constructor(username: string,
        usercontact:string, 
        useraddress:string, 
        userpassword: string, 
        useremail: string, 
        usergender:string, 
        userage:string) {
      this.username = username;
      this.useraddress = useraddress;
      this.usergender=usergender;
      this.userage=userage;
      this.usercontact = usercontact;
      this.useremail = useremail;
      this.userrole="user";
      this.userpassword = userpassword;
    }
  }