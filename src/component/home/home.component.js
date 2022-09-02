import { Myheader } from "../common/header.component"
import {Myfooter} from "../common/footer.component"
import { MyNav } from "../common/navbar.component"
export function Myhome(){
    return(
       <>
       <Myheader/>
       <MyNav></MyNav>
       this is home page
       <Myfooter/>
       </>
    )
}