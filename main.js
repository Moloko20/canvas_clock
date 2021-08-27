function clock() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = hour > 12 ? hour - 12 : hour;

    // console.log(hour, minute, second);

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

    const canvasMiddleX = Math.round(ctx.canvas.clientWidth / 2);
    const canvasMiddleY = Math.round(ctx.canvas.clientHeight / 2);

    ctx.translate(canvasMiddleX, canvasMiddleY);

    //central_circle
    ctx.save();
    ctx.fillStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    //hour_hand
    ctx.save();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 0);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    //minute_hand
    ctx.save();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 0);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    //second_hand
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 0);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    window.addEventListener('resize', canvasSetSize);

    window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);

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
