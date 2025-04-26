class Pomodoro   { 
  static readonly s = 25 * 60 * 1000; }  // 25 min


class shortBreak { 
  static readonly s =  5 * 60 * 1000; }  // 5 min


class longBreak  { 
  static readonly s = 15 * 60 * 1000; }  // 15 min



  const demo = document.getElementById("demo")       as HTMLElement;
  const pomoBtn =   document.getElementById("pomodoro")   as HTMLButtonElement;
  const shortBtn  = document.getElementById("shortbreak") as HTMLButtonElement;
  const longBtn   = document.getElementById("longbreak")  as HTMLButtonElement;
  const stopBtn   = document.getElementById("stopbutton") as HTMLButtonElement
  const startBtn   = document.getElementById("startbutton") as HTMLButtonElement
  
 
  
  pomoBtn .addEventListener("click", () => timer.set(Pomodoro.s), );
  shortBtn.addEventListener("click", () => timer.set(shortBreak.s));
  longBtn .addEventListener("click", () => timer.set(longBreak.s));
  stopBtn.addEventListener("click", () => timer.stop());       
  startBtn.addEventListener("click", () => timer.start());    


class Countdown {
  intervalId: number | null = null;
  endTime = 0;


  constructor(private display: HTMLElement) {}

  
  public set(ms: number) {
    this.stop();               // clear any running loop
    this.endTime   = Date.now() + ms;
    this.tick();               // paint immediately
  }

 

  public start() {
    this.stop();
    this.intervalId = window.setInterval(() => this.tick(), 1000);
  }


  public stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }



  private tick() {
    const remaining = this.endTime - Date.now();

    if (remaining <= 0) {
      this.stop();
      this.display.textContent = "Time's up!";
      return;
    }

    
    const m   = Math.floor(remaining / 60000);
    const s  = Math.floor((remaining % 60000) / 1000);
    


// print display
this.display.textContent = String(m) + "m " + String(s) + "s";

  }
}




 const timer = new Countdown(demo);