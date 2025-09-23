import { CanDeactivateFn } from "@angular/router";
import { CanLeave } from "./can-leave.interfac";

export const canLeaveGuard: CanDeactivateFn<CanLeave> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canLeave()
    ? true
    : confirm(`Etes vous sur de vouloir quitter la page ?`);
};
