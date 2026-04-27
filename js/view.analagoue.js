"use strict";

export function showAnalagoue(time) {
    let secDeg = time.seconds * 6;
    let minDeg = time.minutes * 6;
    let hourDeg = time.hours * 30;

    document.getElementById("sec").style.transform =
        `translate(-50%, -100%) rotate(${secDeg}deg)`;

    document.getElementById("min").style.transform =
        `translate(-50%, -100%) rotate(${minDeg}deg)`;

    document.getElementById("hour").style.transform =
        `translate(-50%, -100%) rotate(${hourDeg}deg)`;
}
