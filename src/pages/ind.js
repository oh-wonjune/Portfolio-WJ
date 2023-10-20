import React, {useEffect, useRef} from 'react';
import {
    Polyline,
    Renderer,
    Transform,
    Vec3,
    Color
} from 'ogl';

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

const MainPage = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const renderer = new Renderer({dpr: 2});
        const gl = renderer.gl;
        containerRef.current.appendChild(gl.canvas);
        gl.clearColor(0.9, 0.9, 0.9, 1);

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

        ["#001987", "#0524D6"].forEach((color, i) => {
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
                    uColor: {value: new Color(color)},
                    uThickness: {value: random(20, 50)}
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

            renderer.render({scene});
            requestAnimationFrame(update);
        }

        requestAnimationFrame(update);

        return () => {
            window.removeEventListener("resize", resize, false);
            if ("ontouchstart" in window) {
                window.removeEventListener("touchstart", updateMouse, false);
                window.removeEventListener("touchmove", updateMouse, false);
            } else {
                window.removeEventListener("mousemove", updateMouse, false);
            }
            containerRef.current.removeChild(gl.canvas);
        }
    }, []);

    return (
        <div ref={containerRef}>


        </div>
    )
}

export default MainPage;