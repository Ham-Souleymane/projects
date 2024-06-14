const bodyel = document.querySelector("body");

function createSpan(x, y) {
    const spanel = document.createElement("span");
    spanel.style.left = x + "px";
    spanel.style.top = y + "px";
    const size = Math.random() * 100;
    spanel.style.width = size + "px";
    spanel.style.height = size + "px";
    bodyel.appendChild(spanel);
    setTimeout(() => {
        spanel.remove();
    }, 3000);
}

bodyel.addEventListener("mousemove", (event) => {
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    createSpan(xpos, ypos);
});

bodyel.addEventListener("touchmove", (event) => {
    event.preventDefault(); // Prevent scrolling
    const touch = event.touches[0];
    const xpos = touch.clientX;
    const ypos = touch.clientY;
    createSpan(xpos, ypos);
});