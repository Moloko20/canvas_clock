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

const canvasMiddleX = Math.round(ctx.canvas.clientWidth * 0.5);
const canvasMiddleY = Math.round(ctx.canvas.clientHeight * 0.5);

canvasSetSize();

window.addEventListener('resize', canvasSetSize);

console.log(Math.round(ctx.canvas.clientWidth * 0.5), canvasMiddleY);
ctx.fillStyle = 'red';
ctx.arc(canvasMiddleX, canvasMiddleY, 30, 0, 2 * Math.PI);
ctx.fill();

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
