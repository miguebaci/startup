///////////////Exercise 5////////////////
const drawRectangle = (ctx) => {
    let grd = ctx.createLinearGradient(0, 0, 500, 0);
    ctx.beginPath();
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 600, 300);
}

const drawLine = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(600, 300);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
    ctx.stroke();
}

const drawText = (ctx) => {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Here comes the CANVAS!!", 10, 250);
    ctx.stroke();
}

const drawCircle = (ctx) => {
    ctx.beginPath();
    ctx.arc(550, 50, 40, 0, 2 * Math.PI);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.stroke();
}

const drawObjects = () => {
    let canvas = document.getElementById("geometric");
    let ctx = canvas.getContext("2d");
    drawRectangle(ctx);
    drawLine(ctx);
    drawText(ctx);
    drawCircle(ctx);
}

window.addEventListener("load", drawObjects);