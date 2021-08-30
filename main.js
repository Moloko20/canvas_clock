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

    ctx.translate(Math.round(width / 2), Math.round(height / 2));
}

function clock() {
    const date = new Date();
    // let hour = date.getHours() * (Math.PI / 6);
    // let minute = date.getMinutes() * (Math.PI / 30);
    // const second = date.getSeconds() + date.getMilliseconds() / 1000;
    // const secArc = (second / 60) * 360;
    // let ms = date.getMilliseconds() * (Math.PI / 1000);
    const second = (date.getSeconds() * Math.PI) / 30;

    // if (hour > 12) {
    //     hour -= 12;
    // }

    ctx.clearRect(
        -ctx.canvas.width / 2,
        -ctx.canvas.height / 2,
        ctx.canvas.width,
        ctx.canvas.height
    );

    //hour_hand
    // ctx.save();
    // ctx.strokeStyle = 'black';
    // ctx.lineWidth = 7;
    // ctx.rotate(hour + minute / 12 + second / 720 + ms / 21600);
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(0, -100);
    // ctx.stroke();
    // ctx.closePath();
    // ctx.restore();

    // //minute_hand
    // ctx.save();
    // ctx.strokeStyle = 'blue';
    // ctx.lineWidth = 5;
    // ctx.rotate(minute + second / 60 + ms / 1800);
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(0, -200);
    // ctx.stroke();
    // ctx.closePath();
    // ctx.restore();

    // //second_hand
    // ctx.save();

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    ctx.rotate(second);
    ctx.lineTo(0, -260);
    ctx.stroke();
    ctx.closePath();
    // ctx.restore();

    // //central_circle
    // ctx.save();
    // ctx.fillStyle = 'red';
    // ctx.lineWidth = 5;
    // ctx.beginPath();
    // ctx.arc(0, 0, 10, 0, 2 * Math.PI);
    // ctx.fill();
    // ctx.stroke();
    // ctx.closePath();
    // ctx.restore();

    // //dial
    // ctx.save();
    // for (let i = 0; i < 12; i++) {
    //     ctx.strokeStyle = 'black';
    //     ctx.lineWidth = 2;
    //     ctx.rotate(Math.PI / 6);
    //     ctx.beginPath();
    //     ctx.moveTo(0, 250);
    //     ctx.lineTo(0, 260);
    //     ctx.stroke();
    //     ctx.closePath();
    // }
    // ctx.restore();

    // ctx.save();
    // for (let i = 1; i <= 12; i++) {
    //     ctx.beginPath();
    //     ctx.font = '36px serif';
    //     let xText = 300 * Math.cos(30 * i * (Math.PI / 180) + Math.PI / -2);
    //     let yText = 300 * Math.sin(30 * i * (Math.PI / 180) + Math.PI / -2);
    //     if (i <= 9) {
    //         ctx.fillText(i, xText - 10, yText + 14);
    //     } else {
    //         ctx.fillText(i, xText - 17, yText + 20);
    //     }
    //     ctx.closePath();
    // }
    // ctx.restore();

    window.requestAnimationFrame(clock);
}

canvasSetSize();
window.requestAnimationFrame(clock);
window.addEventListener('resize', canvasSetSize);
