"use strict";

export function showDigital(time) {
    let h = String(time.hours).padStart(2, "0");
    let m = String(time.minutes).padStart(2, "0");
    let s = String(time.seconds).padStart(2, "0");

    document.getElementById("digital").textContent = `${h}:${m}:${s}`;
}
