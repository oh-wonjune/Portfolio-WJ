import React, {useEffect} from 'react';

const Skills = () => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('tag-canvas').then((tagCanvasModule) => {
                try {
                    tagCanvasModule.default.Start("myCanvas", "tags", {
                        textColour: "#08fdd8",
                        reverse: true,
                        depth: 0.1,
                        maxSpeed: 0.07,
                        outlineMethod: "none",
                        textHeight: 21,
                        wheelZoom: false,
                    });
                } catch (e) {
                    document.getElementById("myCanvasContainer").style.display = "none";
                }
            })
        }
    }, []);


    return (
        <section className="section-Bottom" style={{margin:"8% 10% 8% 10%"}}>
            <section id="section-about" style={{paddingLeft:"60px"}}>
                <div className="text-zone3">
                    <div id="header">
                        <h2 style={{color:"#4CD8FC"}}>My Skill Set</h2>
                    </div>

                    <p>🔧 웹 개발자로서의 나의 여정</p>
                    <p>
                        4년의 웹 개발 경험을 가진 저는 다양한 프로젝트와 팀에서의 협업을 통해 다양한 기술 스택과 문제 해결 능력을 키워왔습니다.
                    </p>
                    <p>
                        🌐 프론트엔드 전문가로: React와 Next.js를 활용한 웹 어플리케이션 구축에서부터 사용자 경험 최적화까지 다양한 프론트엔드 영역에서의 경험을 쌓아왔습니다.
                    </p>
                    <p>
                        🖥 백엔드와의 원활한 협업: 서버와의 통신을 위한 RESTful API 설계 및 구현에도 익숙하며, 웹 애플리케이션의 전체적인 아키텍처 설계에서도 확고한 기반이 있습니다.
                    </p>
                    <p>
                        📚 끊임없는 성장을 추구하며: 새로운 웹 기술 트렌드와 툴에 대한 깊은 관심을 가지고 있으며, 이를 프로젝트에 빠르게 도입하여 항상 최선의 결과물을 제공하고자 노력합니다.
                    </p>
                </div>
            </section>
            <div className="skills-charts" style={{paddingRight:"60px"}}>
                    <div id="myCanvasContainer">
                        <canvas width="500" height="450" id="myCanvas">
                            <ul id="tags">
                                <li><a href="#" target="_blank">HTML</a></li>
                                <li><a href="#" target="_blank">CSS</a></li>
                                <li><a href="#" target="_blank">ES6</a></li>
                                <li><a href="#" target="_blank">TypeScript</a></li>
                                <li><a href="#" target="_blank">REST</a></li>
                                <li><a href="#" target="_blank">JSON</a></li>
                                <li><a href="#" target="_blank">Python</a></li>
                                <li><a href="#" target="_blank">Next JS</a></li>
                                <li><a href="#" target="_blank">JavaScript</a></li>
                                <li><a href="#" target="_blank">CI/CD</a></li>
                                <li><a href="#" target="_blank">React</a></li>
                                <li><a href="#" target="_blank">Node JS</a></li>
                                <li><a href="#" target="_blank">Git</a></li>
                                <li><a href="#" target="_blank">Webpack</a></li>
                                <li><a href="#" target="_blank">WebGL</a></li>
                                <li><a href="#" target="_blank">npm</a></li>
                            </ul>
                        </canvas>
                    </div>
                </div>
        </section>
    );
}

export default Skills;
