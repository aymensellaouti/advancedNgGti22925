import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ConnectedUser } from "../../auth/dto/connected-user.model";

@Component({
  selector: "app-cd-fils",
  templateUrl: "./cd-fils.component.html",
  styleUrls: ["./cd-fils.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdFilsComponent {
  @Input()
  user: ConnectedUser = { id: 1, email: "aymen@gmail.com" };
  @Input()
  name: string = "aymen";
}
