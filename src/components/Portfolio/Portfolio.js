import React, {useState,useEffect, useRef} from "react";
import SkillSet from "../SkillSet/SkillSet"
const Portfolio = () => {
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

            <section className={"section-Bottom"}>
                <article>
                    <h3 style={{'--i': 6}}>Hello, I'm</h3>
                    <h2>Oh Wonjune</h2>
                    <h3 style={{'--i': 8}}>
                        I'm a <span>
                        <a>Frontend developer</a>
                    </span>
                    </h3>
                    <p>- 무엇이든 관심이 생기면 빠르게 도전하고 실행합니다.</p>
                    <p>- 단 한 줄의 코드라도 서비스의 가치를 담으려고 노력합니다.</p>
                    <p>- 한 번 시작한 일은 끝까지 완수를 해야 하는 성격 탓에 엉덩이가 무겁다는 말을 많이 듣습니다. </p>
                </article>
                <div className="img">
                    <img src="/assets/Image.png" alt="Profile"/>
                </div>
            </section>
            {/*<SkillSet/>*/}
        </div>
    );
};

export default Portfolio;
