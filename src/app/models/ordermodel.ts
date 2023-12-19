
export class OrderModel{
    ordername:string;
    orderaddress:string;
    ordercontact:string;
    orderprice:string;
    orderquantity:number;
    orderbrand:string;
    orderstatus:string;
    customername:string;
    ordertime:string;
    customerid:string;
    totalprice:string;
    brandid:string;

constructor(ordername:string, 
            orderaddress:string,
            ordercontact:string, 
            orderprice:string, 
            orderquantity:number, 
            orderbrand:string, 
            orderstatus:string,
            customername:string,ordertime:string,customerid:string,
            totalprice:string,brandid:string){
                this.ordername=ordername
                this.orderaddress=orderaddress
                this.ordercontact=ordercontact
                this.orderprice=orderprice
                this.orderquantity=orderquantity
                this.orderbrand=orderbrand
                this.orderstatus=orderstatus
                this.customername=customername
                this.ordertime=ordertime
                this.customerid=customerid
                this.totalprice=totalprice
                this.brandid=brandid
            }

}