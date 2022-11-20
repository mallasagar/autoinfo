
import {Outlet} from "react-router-dom"
import { MyNav } from "./navbar.component"
import {Myfooter} from "./footer.component"
function Commoncomponent() {
    return (
      
        <>
            <MyNav/>
            <section>
                <Outlet/>
            </section>
            <Myfooter/>
        </>
    
  )
}

export default Commoncomponent