import { Component, inject, Inject } from "@angular/core";
import { SayHelloService } from "./services/say-hello.service";
import { LOGGER_TOKEN } from "./injection tokens/logger.injection-token";
import { LoggerService } from "./services/logger.service";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Starting Advanced Topics";
  router = inject(Router);
  ngxService = inject(NgxUiLoaderService);
  constructor(
    // private sayHEllo: SayHelloService,
    @Inject(LOGGER_TOKEN) private loggersService: LoggerService[]
  ) {
    this.loggersService.forEach((loggerService) => loggerService.logger("cc"));
    //sayHEllo.hello();
    // this.router.events.subscribe({
    //   next: (event) => {
    //     if (event instanceof NavigationStart) {
    //       this.ngxService.start();
    //     } else if (
    //       event instanceof NavigationEnd ||
    //       event instanceof NavigationCancel ||
    //       event instanceof NavigationError
    //     ) {
    //       this.ngxService.stop();
    //     }
    //   },
    // });
  }
}
