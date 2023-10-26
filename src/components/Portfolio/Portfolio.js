import React, {useState} from "react";
import Project from './ Project'

const Portfolio = () => {

    //포트폴리오 영역
    return (
        <section id="projects" className="section-Bottom">
            <div className="projects-container">
                <div className="projects-wrapper">
                    <Project
                        title="Your Mentor"
                        img={'https://raw.githubusercontent.com/oh-wonjune/Portfolio-Contents/main/Yourmentor.png'}
                        tech="js css react"쟁
                        link="http://www.yourmentor.co.kr/entryPage"
                        repo="https://github.com/oh-wonjune/YourMentor"
                    >
                        <small>
                           Next.js, Styled-Components, Recoil, Amazon Linux2, PM2, Jenkins를 사용해 개발
                        </small>
                        <p>
                            YourMentor 프로젝트에서는 취업 및 이직을 준비하는 사람들을 대상으로 자기소개서 첨삭 서비스와 모의 면접 진행 서비스를 제공하는 웹 플랫폼을 개발하였습니다. 이 프로젝트에서는 GPT API를 활용하였으며, Next.js와 React를 사용하여 개발을 진행하였습니다.
                        </p>
                    </Project>
                    <Project
                        title="</> Code dev"
                        img={'https://raw.githubusercontent.com/oh-wonjune/Portfolio-Contents/main/Code_Dev.png'}
                        tech="js react css node"
                        link="http://codedev.site/"
                        repo="https://github.com/oh-wonjune/CodeEditor-forWeb"
                    >
                        <small>
                            React, node.js, css를 사용해 개발
                        </small>
                        <p>
                            Code Dev 프로젝트에서는 React 코드 편집기와 그 코드의 구현 화면으로 이루어져있습니다. node에서 webpack bundling을 진행하여 React소스를 Javascript소스로 변환하여 Iframe에 랜더링 했습니다.
                        </p>
                    </Project>
                    <Project
                        title="Portfolio Wonjune"
                        img={'https://raw.githubusercontent.com/oh-wonjune/Portfolio-Contents/main/porfolio.png'}
                        tech="react css"
                        link="http://wonjune.me/"
                        repo="https://github.com/oh-wonjune/Portfolio-WJ"
                    >
                        <small>
                            Next.js, React, css를 사용해 개발
                        </small>
                        <p>
                            포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다. 이미 순수 React로 개발을 완료한 프로젝트였지만,Next.js로 다시 개발했습니다.
                        </p>
                    </Project>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
