"use strict";
class Pomodoro {
} // 25 min
Pomodoro.s = 25 * 60 * 1000;
class shortBreak {
} // 5 min
shortBreak.s = 5 * 60 * 1000;
class longBreak {
} // 15 min
longBreak.s = 15 * 60 * 1000;
const demo = document.getElementById("demo");
const pomoBtn = document.getElementById("pomodoro");
const shortBtn = document.getElementById("shortbreak");
const longBtn = document.getElementById("longbreak");
const stopBtn = document.getElementById("stopbutton");
const startBtn = document.getElementById("startbutton");
pomoBtn.addEventListener("click", () => timer.set(Pomodoro.s));
shortBtn.addEventListener("click", () => timer.set(shortBreak.s));
longBtn.addEventListener("click", () => timer.set(longBreak.s));
stopBtn.addEventListener("click", () => timer.stop());
startBtn.addEventListener("click", () => timer.start());
class Countdown {
    constructor(display) {
        this.display = display;
        this.intervalId = null;
        this.endTime = 0;
    }
    set(ms) {
        this.stop(); // clear any running loop
        this.endTime = Date.now() + ms;
        this.tick(); // paint immediately
    }
    start() {
        this.stop();
        this.intervalId = window.setInterval(() => this.tick(), 1000);
    }
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    tick() {
        const remaining = this.endTime - Date.now();
        if (remaining <= 0) {
            this.stop();
            this.display.textContent = "Time's up!";
            return;
        }
        const m = Math.floor(remaining / 60000);
        const s = Math.floor((remaining % 60000) / 1000);
        // print display
        this.display.textContent = String(m) + "m " + String(s) + "s";
    }
}
const timer = new Countdown(demo);
