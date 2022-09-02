import { Myheader } from "../common/header.component";
import { MyNav } from "../common/navbar.component";
import { Myfooter } from "../common/footer.component";


export function Mybike(){
    return(
        <>
        <Myheader></Myheader>
        <MyNav></MyNav>
        <p>This is bike page</p>
        <Myfooter></Myfooter>
        </>
    )
}