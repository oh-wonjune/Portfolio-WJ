import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const SkillSet = () => {
    const containerRef = useRef(null);
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Webpack"];

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Create a sphere
        const geometry = new THREE.SphereGeometry(5, 32, 32);
        const material = new THREE.MeshBasicMaterial({ wireframe: true });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Add skills as text to the sphere
        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', font => {
            skills.forEach((skill, i) => {
                const textGeo = new TextGeometry(skill, {
                    font: font,
                    size: 0.5,
                    height: 0.1,
                    curveSegments: 12,
                });
                const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
                const mesh = new THREE.Mesh(textGeo, textMaterial);

                // Place the text on the sphere surface
                const radius = 5.2; // a little bigger than the sphere to make sure text is visible
                const angle = (i / skills.length) * Math.PI * 2;
                mesh.position.set(Math.sin(angle) * radius, Math.cos(angle) * radius, 0);
                mesh.lookAt(new THREE.Vector3(0, 0, 0));
                scene.add(mesh);

                // Connect the skills with lines
                for (let j = i + 1; j < skills.length; j++) {
                    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
                    const points = [
                        new THREE.Vector3(Math.sin((i / skills.length) * Math.PI * 2) * 6, Math.cos((i / skills.length) * Math.PI * 2) * 6, 0),
                        new THREE.Vector3(Math.sin((j / skills.length) * Math.PI * 2) * 6, Math.cos((j / skills.length) * Math.PI * 2) * 6, 0)
                    ];
                    const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
                    const line = new THREE.Line(lineGeo, lineMaterial);
                    scene.add(line);
                }
            });
        });

        camera.position.z = 10;

        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            containerRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} />;
}

export default SkillSet;
