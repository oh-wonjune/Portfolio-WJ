import React, {useEffect, useRef} from "react";

const Portfolio = () => {

    return (
        <div>
            <header className="Portfolio-Header">
                <h1>Portfolio.</h1>
                <nav className="navbar">
                    <a href="#" className="active" style={{'--i': 1}}>Home</a>
                    <a href="#" style={{'--i': 2}}>About</a>
                    <a href="#" style={{'--i': 3}}>Portfolio</a>
                    <a href="#" style={{'--i': 4}}>Skills</a>
                    <a href="#" style={{'--i': 5}}>Contact</a>
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
        </div>
    );
};

export default Portfolio;
