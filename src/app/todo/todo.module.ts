import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { WeekTodoComponent } from "./week-todo/week-todo.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TodoRoutingModule } from "./todo-routing.module";

@NgModule({
  //chneya eli taba3ni
  declarations: [TodoComponent, WeekTodoComponent],
  imports: [FormsModule, CommonModule, TodoRoutingModule],
})
export class TodoModule {}
