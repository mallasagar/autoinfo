import "./header.component.css"

export function Myheader(){

    
      
    
    return(
        //main header
    <div className="header">

                                                    {/* top header */}
                 <div className="topheader">  
                        <div className="topleftheader">
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/mallasagar/" ><img src={require("./icon/linkedin.png") } alt="linkedin" ></img></a></li>
                                    <li> <a href="https://www.facebook.com/mallasagar46/" >< img src={require("./icon/facebook.png") } alt="facebook"  ></img></a></li>
                                    <li><a href = "mailto: mallasagar0101@gmail.com" ><img src={require("./icon/email.png")} alt="email"  ></img></a></li>
                                </ul>
                        </div>
                        <div className="toprightheader">
                                    <p>+977 9860185231</p>
                        </div>
               </div>


                                        {/* bottom header */}
                    <div className="bottomheader">
                        <div>img</div>
                        <div className="rightbottomheader">
                                <ul>
                                    <li>Two</li>
                                    <li>four</li>
                                    <li>Brand</li>
                                    <li>Aboutus</li>
                                    <li>Home </li>
                                </ul>
                        </div>
                    </div>
     </div>
      
    )
}