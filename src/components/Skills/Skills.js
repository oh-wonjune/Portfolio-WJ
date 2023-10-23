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
        <section className="section-Bottom" style={{margin:"10% 10% 6% 10%"}}>
            <section id="section-about">
                <div className="text-zone3">
                    <div id="header">
                        <h2 style={{color:"#4CD8FC"}}>My Skill Set</h2>
                    </div>

                    <p>Since Adobe Flash was a complete innovation, alongside with CSS 1.0
                        and HTML 4.01 as standards of the current web I've been passionate about web.
                    </p>
                    <p>
                        For over a decade I had many opportunities to work in a vast spectrum of
                        <a href="#" className="tech">web technologies</a>
                        what let me gather a significant amount of various experience.
                        Working for companies and individuals around the globe I met and learnt
                        from amazing and ambitious people.
                    </p>
                    <p>
                        I currently work remotely with a selected freelance client base being open
                        for new opportunities.
                    </p>
                </div>
            </section>
            <div className="skills-charts">
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
