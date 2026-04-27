"use strict";

export let time = {
    hours: 0,
    minutes: 0,
    seconds: 0
};

export function updateTime() {
    let now = new Date();

    time.hours = now.getHours();
    time.minutes = now.getMinutes();
    time.seconds = now.getSeconds();
}

export function saveTime() {
    localStorage.setItem("time", JSON.stringify(time));
}

export function loadTime() {
    let data = localStorage.getItem("time");

    if (data) {
        let loaded = JSON.parse(data);

        time.hours = loaded.hours;
        time.minutes = loaded.minutes;
        time.seconds = loaded.seconds;
    }
}
