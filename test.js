// THREE.js animated 3D background
document.addEventListener("DOMContentLoaded", () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = 0;
    renderer.domElement.style.left = 0;
    renderer.domElement.style.zIndex = "-1"; // behind login
    document.body.appendChild(renderer.domElement);

    // Create floating particles
    const geometry = new THREE.SphereGeometry(0.1, 8, 8);
    const material = new THREE.MeshBasicMaterial({ color: 0x4A90E2 });
    const particles = [];

    for (let i = 0; i < 200; i++) {
        let particle = new THREE.Mesh(geometry, material);
        particle.position.x = (Math.random() - 0.5) * 20;
        particle.position.y = (Math.random() - 0.5) * 20;
        particle.position.z = (Math.random() - 0.5) * 20;
        scene.add(particle);
        particles.push(particle);
    }

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        particles.forEach(p => {
            p.rotation.x += 0.01;
            p.rotation.y += 0.01;
        });
        renderer.render(scene, camera);
    }

    animate();
});
