export class UserModel {
    username:string;
    useraddress:string;
    // usergender:string;
    // userage:string;
    userbrand:string;
    userimage:string;
    usercontact:string;
    useremail: string;
    userrole:string;
    userpassword: string;
  
    constructor(username: string,
        usercontact:string, 
        useraddress:string, 
        userpassword: string, 
        useremail: string,
         userbrand:string,
         userimage:string,
        // usergender:string, 
        // userage:string
        )
         {
      this.username = username;
      this.useraddress = useraddress;
      // this.usergender=usergender;
      // this.userage=userage;
      this.usercontact = usercontact;
      this.userbrand = userbrand;
      this.userimage=userimage;
      this.useremail = useremail;
      this.userrole="user";
      this.userpassword = userpassword;
    }
  }