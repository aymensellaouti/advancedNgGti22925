import { Component } from "@angular/core";
import { ConnectedUser } from "../../auth/dto/connected-user.model";

@Component({
  selector: "app-cd",
  templateUrl: "./cd.component.html",
  styleUrls: ["./cd.component.css"],
})
export class CdComponent {
  user: ConnectedUser = { id: 1, email: "aymen@gmail.com" };
  name: string = "aymen";
  changeUser(email: string) {
    this.user = { ...this.user, email };
  }
}
