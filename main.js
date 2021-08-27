function clock() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ms = date.getMilliseconds();

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
    }

    canvasSetSize();

    const canvasMiddleX = Math.round(ctx.canvas.clientWidth / 2);
    const canvasMiddleY = Math.round(ctx.canvas.clientHeight / 2);

    ctx.translate(canvasMiddleX, canvasMiddleY);

    //hour_hand
    ctx.save();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 7;
    ctx.rotate(
        hour * (Math.PI / 6) +
            minute * (Math.PI / 360) +
            second * (Math.PI / 21600) +
            ms * (Math.PI / (21600 * 1000))
    );
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
    ctx.rotate(
        minute * (Math.PI / 30) +
            second * (Math.PI / 1800) +
            ms * (Math.PI / (1800 * 1000))
    );
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
    ctx.rotate(second * (Math.PI / 30) + ms * (Math.PI / 30000));
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -300);
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

    window.addEventListener('resize', canvasSetSize);

    window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
