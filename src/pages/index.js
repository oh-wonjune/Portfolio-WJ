import React, { useState, useEffect, useRef } from "react";
import {Color, Polyline, Renderer, Transform, Vec3} from "ogl";
import Portfolio from '../components/Portfolio/Portfolio'
import BottomSection from "../components/BottomSection/BottomSection";
const vertex = `
            attribute vec3 position;
            attribute vec3 next;
            attribute vec3 prev;
            attribute vec2 uv;
            attribute float side;

            uniform vec2 uResolution;
            uniform float uDPR;
            uniform float uThickness;

            vec4 getPosition() {
                vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
                vec2 nextScreen = next.xy * aspect;
                vec2 prevScreen = prev.xy * aspect;

                vec2 tangent = normalize(nextScreen - prevScreen);
                vec2 normal = vec2(-tangent.y, tangent.x);
                normal /= aspect;
                
                // -- design shape --
                // normal *= 0.1;
                // normal *= uv.y * 0.2;
                // normal *= pow(uv.y, 2.0) * 0.2;
                // normal *= abs(fract(uv.y * 2.0) - 0.5) * 0.4;
                // normal *= cos(uv.y * 12.56) * 0.1 + 0.2;
                // normal *= (1.0 - abs(uv.y - 0.5) * 2.0) * 0.2;
                normal *= (1.0 - pow(abs(uv.y - 0.5) * 2.0, 2.0)) * 0.2;

                float pixelWidth = 1.0 / (uResolution.y / uDPR);
                normal *= pixelWidth * uThickness;

                // When the points are on top of each other, shrink the line to avoid artifacts.
                float dist = length(nextScreen - prevScreen);
                normal *= smoothstep(0.0, 0.02, dist);

                vec4 current = vec4(position, 1);
                current.xy -= normal * side;
                return current;
            }

            void main() {
                gl_Position = getPosition();
            }
        `;


const Container = () => {
  const zaaminRef = useRef(null);
  const pyramidRef = useRef(null);
  const stoneRef = useRef(null);
  const bottomCloudRef = useRef(null);
  const leftCloudRef = useRef(null);
  const moonRef = useRef(null);
  const rightCloudRef = useRef(null);
  const textRef = useRef(null);
  const starsRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const renderer = new Renderer({ dpr: 2 , alpha: true});
    const gl = renderer.gl;
 //   containerRef.current.appendChild(gl.canvas);
    sectionRef.current.appendChild(gl.canvas);
    // const sectionElement = containerRef.current.querySelector("section");
    // sectionElement.appendChild(gl.canvas);
    //gl.clearColor(0.9, 0.9, 0.9, 1);
    gl.clearColor(0, 0, 0, 0);
    const scene = new Transform();
    const lines = [];

    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      lines.forEach((line) => line.polyline.resize());
    }

    window.addEventListener("resize", resize, false);

    function random(a, b) {
      const alpha = Math.random();
      return a * (1.0 - alpha) + b * alpha;
    }
      //#001987
    //#0524D6

        //#98FCFB
        //#6F5DF2
    ["#98FCFB", "#6F5DF2"].forEach((color, i) => {
      const line = {
        spring: random(0.02, 0.1),
        friction: random(0.7, 0.95),
        mouseVelocity: new Vec3(),
        mouseOffset: new Vec3(random(-1, 1) * 0.02)
      };

      const count = 20;
      const points = (line.points = []);
      for (let i = 0; i < count; i++) points.push(new Vec3());

      line.polyline = new Polyline(gl, {
        points,
        vertex,
        uniforms: {
          uColor: { value: new Color(color) },
          uThickness: { value: random(20, 50) }
        }
      });

      line.polyline.mesh.setParent(scene);
      lines.push(line);
    });

    resize();

    const mouse = new Vec3();

    function updateMouse(e) {
      if (e.changedTouches && e.changedTouches.length) {
        e.x = e.changedTouches[0].pageX;
        e.y = e.changedTouches[0].pageY;
      }
      if (e.x === undefined) {
        e.x = e.pageX;
        e.y = e.pageY;
      }

      mouse.set(
        (e.x / gl.renderer.width) * 2 - 1,
        (e.y / gl.renderer.height) * -2 + 1,
        0
      );
    }

    if ("ontouchstart" in window) {
      window.addEventListener("touchstart", updateMouse, false);
      window.addEventListener("touchmove", updateMouse, false);
    } else {
      window.addEventListener("mousemove", updateMouse, false);
    }

    const tmp = new Vec3();

    function update(t) {
      lines.forEach((line) => {
        for (let i = line.points.length - 1; i >= 0; i--) {
          if (!i) {
            tmp.copy(mouse)
              .add(line.mouseOffset)
              .sub(line.points[i])
              .multiply(line.spring);
            line.mouseVelocity.add(tmp).multiply(line.friction);
            line.points[i].add(line.mouseVelocity);
          } else {
            line.points[i].lerp(line.points[i - 1], 0.9);
          }
        }
        line.polyline.updateGeometry();
      });

      renderer.render({ scene });
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);

    const handleScroll = () => {
      let val = window.scrollY;
      let responsive = window.innerWidth;

      pyramidRef.current.style.transform = `translateY(${val * 0.5}px)`;
      stoneRef.current.style.transform = `translateY(${val * 0.1}px)`;
      moonRef.current.style.transform = `translateX(${val * -0.3}px)`;
      leftCloudRef.current.style.transform = `translateX(${val * -0.3}px)`;
      rightCloudRef.current.style.transform = `translateX(${val * 0.3}px)`;
      bottomCloudRef.current.style.transform = `translateX(${val * 0.8}px)`;
      starsRef.current.style.transform = `translateY(${val * -1}px)`;
      textRef.current.style.transform = `translateY(${val * 2}px)`;

      if (responsive <= 768) {
        textRef.current.style.transform = `scale(0.7) translateY(${val}px)`;
      }
      if (responsive <= 576) {
        textRef.current.style.transform = `scale(0.5) translateY(${val}px)`;
      }

      if (window.scrollY > window.innerHeight / 3) {
        setIsVisible(true);
      } else if(window.scrollY === 0){
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resize, false);
      if ("ontouchstart" in window) {
        window.removeEventListener("touchstart", updateMouse, false);
        window.removeEventListener("touchmove", updateMouse, false);
      } else {
        window.removeEventListener("mousemove", updateMouse, false);
      }
      //containerRef.current.removeChild(gl.canvas);
      sectionRef.current.removeChild(gl.canvas);

    };
  }, []);

  return (
    <div ref={containerRef}>
      <section ref={sectionRef} className={"section-Top"}>
        <img src="https://i.ibb.co/F0vtvgv/zaamin.png" ref={zaaminRef} id="zaamin"/>
          <img src="https://i.ibb.co/JkQ0tjj/newp.png" ref={pyramidRef} id="pyramid"/>
          <img src="https://i.ibb.co/tCBszkD/cover.png" id="cover"/>
          <img src="https://i.ibb.co/v1kmgKC/stone.png" ref={stoneRef} id="stone"/>
          <img src="https://i.ibb.co/Q6g4ycw/bottom-cloud.png" ref={bottomCloudRef} id="bottom_cloud"/>
          <img src="https://i.ibb.co/NZmVvbJ/left-cloud.png" ref ={leftCloudRef} id="left_cloud"/>
          <img src="https://i.ibb.co/HF2byb0/moon.png" ref={moonRef} id="moon"/>
          <img src="https://i.ibb.co/nCkhw23/right-cloud.png" ref={rightCloudRef} id="right_cloud"/>
          <img src="/assets/wonjune_bedge.png" ref={textRef} id="text" style={{width:"900px"}}/>
          <img src="https://i.ibb.co/BZs8WZr/stars.png" ref={starsRef} id="stars"/>

      </section>

      <div className="content">
        {isVisible ?
        <BottomSection/>
        :
            <div className="portfolio-placeholder"></div>
        }
      </div>
    </div>
  );
};

export default Container;
