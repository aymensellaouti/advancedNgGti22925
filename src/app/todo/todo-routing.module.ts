import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { canLeaveGuard } from "../guards/can-leave.guard";
import { TodoComponent } from "./todo/todo.component";

export const TODO_ROUTES = [
  {
    path: "",
    component: TodoComponent,
    canDeactivate: [canLeaveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(TODO_ROUTES)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
