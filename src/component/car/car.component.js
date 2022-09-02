import { Myfooter } from "../common/footer.component";
import { Myheader } from "../common/header.component";
import { MyNav } from "../common/navbar.component";


export function Mycar(){
    return(
        <>
        <Myheader></Myheader>
        <MyNav></MyNav>
            <p>this is carpage</p>
        <Myfooter></Myfooter>
        </>
    )
}