import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent implements OnInit, OnDestroy {
  private interval: any;
  private time: number;

  constructor() {
    this.time = 600;
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.time--;

      if (this.time === 0) {
        this.stop();
      }
    }, 1000);
  }

  getTime() {
    const seconds = this.time % 60;
    const minutes = Math.trunc(this.time / 60);

    return {
      seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
      minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
    };
  }

  stop() {
    if (this.interval) clearInterval(this.interval);
  }

  ngOnDestroy(): void {
    this.stop();
    console.log('onDestroy (timer)');
  }
}
