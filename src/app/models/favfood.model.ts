export class favFoodModel{

  userid:number;
  foodid:number;
  favorder:number;
  
    constructor(userid:number,foodid:number,favorder:number
        )
        {
             this.userid = userid;
             this.foodid = foodid;
             this.favorder = favorder;
  }
}