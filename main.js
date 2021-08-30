function debounce(callback, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    };
}

function clock() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let date = new Date();
    let hour = date.getHours() * (Math.PI / 6);
    let minute = date.getMinutes() * (Math.PI / 30);
    let second = date.getSeconds() * (Math.PI / 30);
    let ms = date.getMilliseconds() * (Math.PI / 1000);

    if (hour > 12) {
        hour -= 12;
    }

    function canvasSetSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        ctx.canvas.width = width * window.devicePixelRatio;
        ctx.canvas.height = height * window.devicePixelRatio;

        ctx.canvas.style.width = width + 'px';
        ctx.canvas.style.height = height + 'px';

        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        ctx.save();
        ctx.translate(
            Math.round(ctx.canvas.clientWidth / 2),
            Math.round(ctx.canvas.clientHeight / 2)
        );
    }

    canvasSetSize();

    //hour_hand
    ctx.save();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 7;
    ctx.rotate(hour + minute / 12 + second / 720 + ms / 21600);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -100);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    //minute_hand
    ctx.save();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.rotate(minute + second / 60 + ms / 1800);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -200);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    //second_hand
    ctx.save();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.rotate(second + ms / 30);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -260);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

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

    ctx.save();
    for (let i = 0; i < 12; i++) {
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.rotate(Math.PI / 6);
        ctx.beginPath();
        ctx.moveTo(0, 250);
        ctx.lineTo(0, 260);
        ctx.stroke();
        ctx.closePath();
    }
    ctx.restore();

    ctx.save();
    for (let i = 1; i <= 12; i++) {
        ctx.beginPath();
        ctx.font = '36px serif';
        let xText = 300 * Math.cos(30 * i * (Math.PI / 180) + Math.PI / -2);
        let yText = 300 * Math.sin(30 * i * (Math.PI / 180) + Math.PI / -2);
        if (i <= 9) {
            ctx.fillText(i, xText - 10, yText + 14);
        } else {
            ctx.fillText(i, xText - 17, yText + 20);
        }
        ctx.closePath();
    }
    ctx.restore();

    window.addEventListener('resize', debounce(canvasSetSize, 1000, false));

    window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
