import React, {useState, useEffect, useRef} from "react";
import Home from '../Home/Home'
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";

const BottomSection = (props) => {
    const {idx, setIdx} = props
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);

    const headerRef = useRef(null);
    const contentRef = useRef(null);
    const parentRef = useRef(null);
    const parentWidth = parentRef.current ? parentRef.current.offsetWidth : 'auto';
    const marginPercent = 10; // 여기에 원래의 마진 퍼센트 값을 지정합니다.
    const marginValue = (marginPercent / 100) * parentWidth;
    const headerWidth = parentWidth - 2 * marginValue;


    const onClickHeader = (e) => {
        switch (e.target.id) {
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
        }
    }

    useEffect(() => {
        // 헤더의 초기 위치를 저장
        const initialHeaderTop = headerRef.current.getBoundingClientRect().top + window.scrollY;

        const handleScroll = () => {
            // 현재 스크롤 위치
            const currentScrollTop = window.scrollY;

            if (currentScrollTop >= initialHeaderTop && !isHeaderSticky) {
                setIsHeaderSticky(true);
            } else if (currentScrollTop < initialHeaderTop && isHeaderSticky) {
                setIsHeaderSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isHeaderSticky]);

    return (
        <div ref={parentRef}>
            <header className={isHeaderSticky ? 'sticky-Header' : 'Portfolio-Header'} style={{width: headerWidth}}
                    ref={headerRef}>
                <h1 style={{fontSize:"3em"}}>Portfolio.</h1>
                <nav className="navbar" style={{display: "flex", alignItems: "center", marginTop: "20px"}}>
                    <button id="tab1" onClick={onClickHeader} className={idx === 1 ? "active" : ""} style={{'--i': 1}}>
                        Home
                    </button>
                    <button id="tab2" onClick={onClickHeader} className={idx === 2 ? "active" : ""} style={{'--i': 2}}>
                        Portfolio
                    </button>
                    <button id="tab3" onClick={onClickHeader} className={idx === 3 ? "active" : ""} style={{'--i': 3}}>
                        Skills
                    </button>
                    <button id="tab4" onClick={onClickHeader} className={idx === 4 ? "active" : ""} style={{'--i': 4}}>
                        Contact
                    </button>
                </nav>
            </header>
            <div ref={contentRef} className={isHeaderSticky ? 'sticky-content' : ''}>
                {idx === 1 &&
                <Home/>
                }
                {idx === 2 &&
                <Portfolio/>
                }
                {idx === 3 &&
                <Skills/>
                }
                {idx === 4 &&
                <Contact/>
                }
            </div>
        </div>
    );
};

export default BottomSection;
