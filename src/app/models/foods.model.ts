export class FoodModel{
    foodname: string;
    foodimageurl:string;
    foodprice:number;
    quantity:number;
    foodmakerstatus:string;
    foodmakeraddress:string;
    foodmakerbrand:string;
    fooddescription:string;
    foodmakercontact:number;
    foodcategory:string;
    foodcuisine:string;
    userid:number;



    constructor( foodname: string,
        foodimageurl:string,
        foodprice:number,
        quantity:number,
        status:string,
        address:string,
        brand:string,
        contact:number,
        userid:number,
        description:string,
        category:string,
        cuisine:string,

    ){
        this.foodname=foodname;
        this.foodimageurl=foodimageurl;
        this.foodprice=foodprice;
        this.quantity=quantity;
        this.foodmakerstatus=status;
        this.foodmakeraddress=address;
        this.foodmakerbrand=brand;
        this.foodmakercontact=contact;
        this.userid=userid;
        this.foodcategory=category;
        this.foodcuisine=cuisine
        this.fooddescription=description;
        

    }
}