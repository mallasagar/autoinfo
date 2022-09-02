import { Myheader } from "../common/header.component";
import { MyNav } from "../common/navbar.component";
import { Myfooter } from "../common/footer.component";

export function About(){
    return(
        <>
        <Myheader></Myheader>
        <MyNav></MyNav>
        <p>this is about page</p>
        <Myfooter></Myfooter>
        </>
    )

}