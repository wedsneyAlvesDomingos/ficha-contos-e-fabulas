document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const colorPicker = document.getElementById("colorPicker");
    const eraseButton = document.getElementById("eraseButton");

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    colorPicker.addEventListener("input", (e) => {
        ctx.strokeStyle = e.target.value;
    });

    eraseButton.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas.
    });

    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseout", () => isDrawing = false);

    function draw(e) {
        if (!isDrawing) return;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
});