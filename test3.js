document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".login-container button");

    button.addEventListener("click", (e) => {
        e.preventDefault(); // prevent form submit for demo

        // Get click position relative to button
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Create bubble element
        const bubble = document.createElement("span");
        bubble.classList.add("bubble");
        bubble.style.left = x + "px";
        bubble.style.top = y + "px";
        bubble.style.width = bubble.style.height = "20px";

        button.appendChild(bubble);

        // Remove bubble after animation
        setTimeout(() => {
            bubble.remove();
        }, 800);
    });
});
