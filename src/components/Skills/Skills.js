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
        <div id="home-magicwall" className="fake-magicwall">
            <section id="section-about">

                <div className="skills-charts">
                    <div id="myCanvasContainer">
                        <canvas width="500" height="500" id="myCanvas">
                            <ul id="tags">
                                <li><a href="#" target="_blank">HTML</a></li>
                                <li><a href="#" target="_blank">CSS</a></li>
                                <li><a href="#" target="_blank">ES6</a></li>
                                <li><a href="#" target="_blank">TypeScript</a></li>
                                <li><a href="#" target="_blank">REST</a></li>
                                <li><a href="#" target="_blank">JSON</a></li>
                                <li><a href="#" target="_blank">React</a></li>
                                <li><a href="#" target="_blank">Next JS</a></li>
                                <li><a href="#" target="_blank">JavaScript</a></li>
                                <li><a href="#" target="_blank">CI/CD</a></li>
                                <li><a href="#" target="_blank">Python</a></li>
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
        </div>
    );
}

export default Skills;
