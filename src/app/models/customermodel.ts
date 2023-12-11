export class CustomerModel {
    customername:string;
    customeraddress:string;
    customergender:string;
    customerage:string;
    customercontact:string;
    customeremail: string;
    userrole:string;
    customerpassword: string;
  
    constructor(customername: string,
        customercontact:string, 
        customeraddress:string, 
        customerpassword: string, 
        customeremail: string,
        customergender:string, 
        customerage:string
        )
         {
      this.customername = customername;
      this.customeraddress = customeraddress;
      this.customergender=customergender;
      this.customerage=customerage;
      this.customercontact = customercontact;
      this.customeremail = customeremail;
      this.userrole="customer";
      this.customerpassword = customerpassword;
    }
  }