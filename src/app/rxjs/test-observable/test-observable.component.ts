import { Component, OnDestroy } from "@angular/core";
import { Observable, Subscription, filter, map } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-test-observable",
  templateUrl: "./test-observable.component.html",
  styleUrls: ["./test-observable.component.css"],
})
export class TestObservableComponent implements OnDestroy {
  firstObservable$: Observable<number>;
  counter = 5;
  subscribtions = new Subscription();
  constructor(private toaster: ToastrService) {
    this.firstObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        } else {
          observer.next(i--);
        }
      }, 1000);
    });
    this.subscribtions.add(
      this.firstObservable$.subscribe({
        next: (data) => {
          console.log(data);
          this.counter = data;
        },
      })
    );

    // setTimeout(() => {
    this.subscribtions.add(
      this.firstObservable$.subscribe({
        next: (data) => {
          this.toaster.info("" + data);
        },
        complete: () => {
          this.toaster.error("BOOOOOM");
        },
      })
    );
    // }, 3000);
  }
  ngOnDestroy(): void {
    this.subscribtions.unsubscribe();
  }
}
