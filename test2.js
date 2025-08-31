// Create floating cubes dynamically
document.addEventListener("DOMContentLoaded", () => {
    const bg = document.createElement("div");
    bg.classList.add("background");
    document.body.appendChild(bg);

    for (let i = 0; i < 12; i++) {
        let cube = document.createElement("div");
        cube.classList.add("cube");
        cube.style.left = Math.random() * window.innerWidth + "px";
        cube.style.top = Math.random() * window.innerHeight + "px";
        cube.style.animationDuration = (5 + Math.random() * 5) + "s";
        bg.appendChild(cube);
    }
});
