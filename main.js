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
    const secondX = Math.cos(secondArc - Math.PI / 2) * 260;
    const secondY = Math.sin(secondArc - Math.PI / 2) * 260;
    const secondCopyX = Math.cos(secondArc + Math.PI / 2) * 260;
    const secondCopyY = Math.sin(secondArc + Math.PI / 2) * 260;

    const minute = date.getMinutes() + second / 60;
    const minuteArc = (minute * Math.PI) / 30;
    const minuteX = Math.cos(minuteArc - Math.PI / 2) * 210;
    const minuteY = Math.sin(minuteArc - Math.PI / 2) * 210;
    const minuteCopyX = Math.cos(minuteArc + Math.PI / 2) * 210;
    const minuteCopyY = Math.sin(minuteArc + Math.PI / 2) * 210;

    const hour = (date.getHours() % 12) + minute / 60;
    const hourArc = (hour * Math.PI) / 6;
    const hourX = Math.cos(hourArc - Math.PI / 2) * 150;
    const hourY = Math.sin(hourArc - Math.PI / 2) * 150;
    const hourCopyX = Math.cos(hourArc + Math.PI / 2) * 150;
    const hourCopyY = Math.sin(hourArc + Math.PI / 2) * 150;

    ctx.clearRect(
        -ctx.canvas.width / 2,
        -ctx.canvas.height / 2,
        ctx.canvas.width,
        ctx.canvas.height
    );

    //clone_hour_hand
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(187, 187, 187)';
        ctx.lineCap = 'butt';
        ctx.lineWidth = 2;
        switch (i) {
            case 0:
                ctx.moveTo(secondX, secondY);
                ctx.lineTo(secondX - hourCopyX, secondY - hourCopyY);
                break;

            case 1:
                ctx.moveTo(minuteX, minuteY);
                ctx.lineTo(minuteX - hourCopyX, minuteY - hourCopyY);
                break;

            case 2:
                ctx.moveTo(hourX - secondCopyX, hourY - secondCopyY);
                ctx.lineTo(
                    minuteX - secondCopyX + hourX,
                    minuteY - secondCopyY + hourY
                );
                break;
        }

        ctx.stroke();
        ctx.closePath();
    }

    //clone_minute_hand
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(187, 187, 187)';
        ctx.lineCap = 'butt';
        ctx.lineWidth = 2;
        switch (i) {
            case 0:
                ctx.moveTo(hourX, hourY);

                ctx.lineTo(hourX - minuteCopyX, hourY - minuteCopyY);
                break;

            case 1:
                ctx.moveTo(secondX, secondY);

                ctx.lineTo(secondX - minuteCopyX, secondY - minuteCopyY);
                break;

            case 2:
                ctx.moveTo(secondX - minuteCopyX, secondY - minuteCopyY);
                ctx.lineTo(
                    minuteX - secondCopyX + hourX,
                    minuteY - secondCopyY + hourY
                );
                break;
        }

        ctx.stroke();
        ctx.closePath();
    }

    //clone_second_hand
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(187, 187, 187)';
        ctx.lineCap = 'butt';
        ctx.lineWidth = 2;
        switch (i) {
            case 0:
                ctx.moveTo(hourX, hourY);
                ctx.lineTo(hourX - secondCopyX, hourY - secondCopyY);
                break;

            case 1:
                ctx.moveTo(minuteX, minuteY);
                ctx.lineTo(minuteX - secondCopyX, minuteY - secondCopyY);
                break;

            case 2:
                ctx.moveTo(hourX - minuteCopyX, hourY - minuteCopyY);
                ctx.lineTo(
                    minuteX - secondCopyX + hourX,
                    minuteY - secondCopyY + hourY
                );
                break;
        }
        ctx.stroke();
        ctx.closePath();
    }

    //hour_hand
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineCap = 'round';
    ctx.lineWidth = 6;
    ctx.moveTo(0, 0);
    ctx.lineTo(hourX, hourY);
    ctx.stroke();
    ctx.closePath();

    //minute_hand
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.moveTo(0, 0);
    ctx.lineTo(minuteX, minuteY);
    ctx.stroke();
    ctx.closePath();

    //second_hand
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    ctx.lineTo(secondX, secondY);
    ctx.stroke();
    ctx.closePath();

    //central_circle
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'black';
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
