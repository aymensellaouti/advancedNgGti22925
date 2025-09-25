import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { User } from "../users.service";

@Component({
  selector: "app-user-list-elements",
  templateUrl: "./user-list-elements.component.html",
  styleUrls: ["./user-list-elements.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListElementsComponent {
  @Input() users: User[] = [];
}
