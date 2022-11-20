import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Myhome } from "./component/home/home.component"
import {Mybike} from "./component/bike/bike.component"
import { Mycar } from "./component/car/car.component"
import { About } from "./component/about/about.component"
import { Mygallery } from "./component/gallery/gallery.component"
import Mycontact from "./component/contact/contact.component"
import Commoncomponent from "./component/common/common.component"


export function Myapp(){
    return(
        


            // Configuring path

            <BrowserRouter>
                    <Routes>
                            <Route path="/" element={<Commoncomponent/>}>    
                                <Route index element={<Myhome/>}    ></Route>    
                                <Route path="bike" element={<Mybike></Mybike>}></Route>
                                <Route path="car" element={<Mycar></Mycar>}></Route>
                                <Route path="gallery" element={<Mygallery></Mygallery>}></Route>
                                <Route path="about" element={<About></About>}> </Route>
                                <Route path="contact" element={<Mycontact/>}></Route>
                            </Route>


                           
                    </Routes>
            
            </BrowserRouter>




    )
}