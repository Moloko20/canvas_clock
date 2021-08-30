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

    const second = date.getSeconds() + date.getMilliseconds() / 1000;
    const secondArc = (second * Math.PI) / 30;

    const minute = date.getMinutes() + second / 60;
    const minuteArc = (minute * Math.PI) / 30;

    const hour = (date.getHours() % 12) + minute / 60;
    const hourArc = (hour * Math.PI) / 6;

    ctx.clearRect(
        -ctx.canvas.width / 2,
        -ctx.canvas.height / 2,
        ctx.canvas.width,
        ctx.canvas.height
    );

    //hour_hand
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 7;
    ctx.moveTo(0, 0);
    ctx.rotate(hourArc);
    ctx.lineTo(0, -100);
    ctx.stroke();
    ctx.rotate(-hourArc);
    ctx.closePath();

    //minute_hand
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.moveTo(0, 0);
    ctx.rotate(minuteArc);
    ctx.lineTo(0, -200);
    ctx.stroke();
    ctx.rotate(-minuteArc);
    ctx.closePath();

    //second_hand

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    ctx.rotate(secondArc);
    ctx.lineTo(0, -260);
    ctx.stroke();
    ctx.rotate(-secondArc);
    ctx.closePath();

    //central_circle
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.lineWidth = 5;
    ctx.arc(0, 0, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    window.requestAnimationFrame(clock);
}

canvasSetSize();
window.requestAnimationFrame(clock);
window.addEventListener('resize', canvasSetSize);
