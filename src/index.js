import React from "react";
import  ReactDOM  from "react-dom";
import { Myhome } from "./component/home/home.component";



function App(){
    return(
        <>
       <Myhome/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('autoinfo'));