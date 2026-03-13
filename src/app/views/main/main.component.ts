import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from "rxjs";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  popupVisible: boolean = false;
  private timerSubscription?: Subscription;

  openPopup(): void {
    this.popupVisible = true;
  }

  closePopup(): void {
    this.popupVisible = false;
  }

  ngOnInit() {
    this.timerSubscription = timer(10000).subscribe(() => {
      console.log('10 секунд прошло, открываем попап');
      this.openPopup();
    });
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  images: string[] = [
    'assets/images/banner1.png',
    'assets/images/banner2.png',
    'assets/images/banner3.png'
  ];
}
