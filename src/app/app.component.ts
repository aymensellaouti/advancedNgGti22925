import { Component, Inject } from "@angular/core";
import { SayHelloService } from "./services/say-hello.service";
import { LOGGER_TOKEN } from "./injection tokens/logger.injection-token";
import { LoggerService } from "./services/logger.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(
    // private sayHEllo: SayHelloService,
    @Inject(LOGGER_TOKEN) private loggersService: LoggerService[]
  ) {
    this.loggersService.forEach((loggerService) => loggerService.logger("cc"));
    //sayHEllo.hello();
  }
  title = "Starting Advanced Topics";
}
