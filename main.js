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
    ctx.lineTo(
        Math.cos(hourArc - Math.PI / 2) * 100,
        Math.sin(hourArc - Math.PI / 2) * 100
    );
    ctx.stroke();
    ctx.closePath();

    //clone_hour_hand
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgb(163, 163, 163)';
        ctx.lineWidth = 2;
        switch (i) {
            case 0:
                ctx.moveTo(
                    Math.cos(secondArc - Math.PI / 2) * 260,
                    Math.sin(secondArc - Math.PI / 2) * 260
                );
                ctx.lineTo(
                    Math.cos(secondArc - Math.PI / 2) * 260 -
                        Math.cos(hourArc + Math.PI / 2) * 100,
                    Math.sin(secondArc - Math.PI / 2) * 260 -
                        Math.sin(hourArc + Math.PI / 2) * 100
                );
                break;

            case 1:
                ctx.moveTo(
                    Math.cos(minuteArc - Math.PI / 2) * 200,
                    Math.sin(minuteArc - Math.PI / 2) * 200
                );
                ctx.lineTo(
                    Math.cos(minuteArc - Math.PI / 2) * 200 -
                        Math.cos(hourArc + Math.PI / 2) * 100,
                    Math.sin(minuteArc - Math.PI / 2) * 200 -
                        Math.sin(hourArc + Math.PI / 2) * 100
                );
                break;

            case 2:
                //
                break;
        }

        ctx.stroke();
        ctx.closePath();
    }

    //minute_hand
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.moveTo(0, 0);
    ctx.lineTo(
        Math.cos(minuteArc - Math.PI / 2) * 200,
        Math.sin(minuteArc - Math.PI / 2) * 200
    );
    ctx.stroke();
    ctx.closePath();

    //clone_minute_hand
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgb(163, 163, 163)';
        ctx.lineWidth = 2;
        switch (i) {
            case 0:
                ctx.moveTo(
                    Math.cos(hourArc - Math.PI / 2) * 100,
                    Math.sin(hourArc - Math.PI / 2) * 100
                );

                ctx.lineTo(
                    Math.cos(hourArc - Math.PI / 2) * 100 -
                        Math.cos(minuteArc + Math.PI / 2) * 200,
                    Math.sin(hourArc - Math.PI / 2) * 100 -
                        Math.sin(minuteArc + Math.PI / 2) * 200
                );
                break;

            case 1:
                ctx.moveTo(
                    Math.cos(secondArc - Math.PI / 2) * 260,
                    Math.sin(secondArc - Math.PI / 2) * 260
                );

                ctx.lineTo(
                    Math.cos(secondArc - Math.PI / 2) * 260 -
                        Math.cos(minuteArc + Math.PI / 2) * 200,
                    Math.sin(secondArc - Math.PI / 2) * 260 -
                        Math.sin(minuteArc + Math.PI / 2) * 200
                );
                break;

            case 2:
                //
                break;
        }

        ctx.stroke();
        ctx.closePath();
    }

    //second_hand
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    ctx.lineTo(
        Math.cos(secondArc - Math.PI / 2) * 260,
        Math.sin(secondArc - Math.PI / 2) * 260
    );
    ctx.stroke();
    ctx.closePath();

    //clone_second_hand
    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgb(163, 163, 163)';
        ctx.lineWidth = 2;
        switch (i) {
            case 0:
                ctx.moveTo(
                    Math.cos(hourArc - Math.PI / 2) * 100,
                    Math.sin(hourArc - Math.PI / 2) * 100
                );
                ctx.lineTo(
                    Math.cos(hourArc - Math.PI / 2) * 100 -
                        Math.cos(secondArc + Math.PI / 2) * 260,
                    Math.sin(hourArc - Math.PI / 2) * 100 -
                        Math.sin(secondArc + Math.PI / 2) * 260
                );
                break;

            case 1:
                ctx.moveTo(
                    Math.cos(minuteArc - Math.PI / 2) * 200,
                    Math.sin(minuteArc - Math.PI / 2) * 200
                );
                ctx.lineTo(
                    Math.cos(minuteArc - Math.PI / 2) * 200 -
                        Math.cos(secondArc + Math.PI / 2) * 260,
                    Math.sin(minuteArc - Math.PI / 2) * 200 -
                        Math.sin(secondArc + Math.PI / 2) * 260
                );
                break;

            case 2:
                //
                break;
        }
        ctx.stroke();
        ctx.closePath();
    }

    //central_circle
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.arc(0, 0, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'transparent';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.arc(0, 0, 260, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    window.requestAnimationFrame(clock);
}

canvasSetSize();
window.requestAnimationFrame(clock);
window.addEventListener('resize', canvasSetSize);
