import React, {useState} from "react";
import Home from '../Home/Home'
import Skills from "../Skills/Skills";

const BottomSection = () => {
    const [idx,setIdx] = useState(1)

    const onClickHeader=(e)=>{
        switch(e.target.id){
            case "tab1":
                setIdx(1)
                break;
            case "tab2":
                setIdx(2)
                break;
            case "tab3":
                setIdx(3)
                break;
           case "tab4":
                setIdx(4)
                break;
           case "tab5":
                setIdx(5)
                break;
        }
    }

    return (
        <div>
            <header className="Portfolio-Header">
                <h1>Portfolio.</h1>
                <nav className="navbar">
                    <button id="tab1" onClick={onClickHeader} className={idx ===1?"active": ""} style={{'--i': 1}}>Home</button>
                    <button id="tab2" onClick={onClickHeader} className={idx ===2?"active": ""} style={{'--i': 2}}>About</button>
                    <button id="tab3" onClick={onClickHeader} className={idx ===3?"active": ""} style={{'--i': 3}}>Portfolio</button>
                    <button id="tab4" onClick={onClickHeader} className={idx ===4?"active": ""} style={{'--i': 4}}>Skills</button>
                    <button id="tab5" onClick={onClickHeader} className={idx ===5?"active": ""} style={{'--i': 5}}>Contact</button>
                </nav>
            </header>

           <Home/>
           <Skills/>
        </div>
    );
};

export default BottomSection;
