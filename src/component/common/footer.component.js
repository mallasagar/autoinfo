import "./footer.component.css"
import "./footer.css"

export function Myfooter(){
    return(
        <div className="footer"> 
        
            <div className="topfooter">

                <div className="blog">
                                    <ul>
                                         Blog
                                        <li>News</li>
                                        <li>Upcoming</li>
                                        <li> blog</li>
                                        <li> blog</li>
                                    </ul>
                </div>
                <div className="location">
                                    <ul>
                                         Location
                                        <li>Imadol, Lalitpur </li>
                                        <li>Nepal</li>
                                    </ul>
                </div>

                <div className="service">
                    <ul>Office operate at:
                        <li> opening: 9 AM</li>
                        <li> Closing: 5 PM</li>

                    </ul>
                </div>


                <div className="contact">
                    <ul>Contact us
                        <li>phone: 9860185231</li>
                        <li>email:mallasagar0101@gmail.com</li>
                    </ul>
                </div>


             </div>




             
            <div className="bottomfooter">
                <div className="facebook">facebook</div>
                <div className="instagram">instagram</div>
                <div className="linkedin">linkedin</div>
            </div>
           
        
        </div>

    )

}