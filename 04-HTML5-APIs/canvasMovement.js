let canvas2 = document.getElementById("movingRect");
let context = canvas2.getContext("2d");
let y = 0;
let velocity = 10;

const rectangle = () => {
    context.fillStyle = "blue";
    context.fillRect(0, y, 300, 50);
}


const drawMoving = () => {

    context.clearRect(0, y, 300, 50);

    y += velocity;

    if (y + 60 > 300 || y <= 0) {
        velocity *= -1;
    }

    rectangle();
}

window.addEventListener("load", setInterval(drawMoving, 100));