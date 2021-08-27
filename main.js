const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function canvasSetSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    ctx.canvas.width = width * window.devicePixelRatio;
    ctx.canvas.height = height * window.devicePixelRatio;

    ctx.canvas.style.width = width + 'px';
    ctx.canvas.style.height = height + 'px';

    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

canvasSetSize();

window.addEventListener('resize', canvasSetSize);

//central_circle
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.arc(
    Math.round(ctx.canvas.clientWidth / 2),
    Math.round(ctx.canvas.clientHeight / 2),
    10,
    0,
    2 * Math.PI
);
ctx.fill();
ctx.stroke();
ctx.closePath();

//hour_hand
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.lineWidth = 5;
ctx.textAlign = 'center';
ctx.fillRect(
    Math.round(ctx.canvas.clientWidth / 2) - 3.5,
    Math.round(ctx.canvas.clientHeight / 2) + 3.5,
    7,
    -200
);
ctx.fill();
ctx.stroke();
ctx.closePath();

//minute_hand
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.lineWidth = 5;
ctx.textAlign = 'center';
ctx.fillRect(
    Math.round(ctx.canvas.clientWidth / 2) - 2.5,
    Math.round(ctx.canvas.clientHeight / 2) + 2.5,
    5,
    -270
);
ctx.fill();
ctx.stroke();
ctx.closePath();

//second_hand
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.lineWidth = 5;
ctx.textAlign = 'center';
ctx.fillRect(
    Math.round(ctx.canvas.clientWidth / 2) - 1.5,
    Math.round(ctx.canvas.clientHeight / 2) + 1.5,
    3,
    -320
);
ctx.fill();
ctx.stroke();
ctx.closePath();

// ctx.beginPath()
// ctx.fillStyle = 'blue'
// ctx.arc(300, 300, 50, 0, 2 * Math.PI)
// ctx.fill()
// ctx.closePath()

// ctx.beginPath()
// ctx.fillStyle = 'red'
// ctx.arc(600, 600, 50, 0, 2 * Math.PI)
// ctx.fill()
// ctx.closePath()

// ctx.beginPath();
// ctx.fillStyle = 'black';
// ctx.moveTo(200, 200);
// ctx.lineTo(300, 300);
// ctx.lineTo(400, 300);
// ctx.lineTo(400, 100);
// ctx.lineTo(200, 200);
// ctx.fill();
// ctx.closePath();

// const canvasMiddleY = Math.round(ctx.canvas.clientHeight / 2)

// ctx.moveTo(0, canvasMiddleY)
// ctx.quadraticCurveTo(
//     //
//     600,
//     100,
//     //
//     ctx.canvas.clientWidth,
//     canvasMiddleY,
// )

// ctx.stroke()
