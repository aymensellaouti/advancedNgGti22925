import { ResolveFn } from "@angular/router";
import { Cv } from "./model/cv";
import { inject } from "@angular/core";
import { CvService } from "./services/cv.service";

export const cvsResolver: ResolveFn<Cv[]> = (route, state) => {
  return inject(CvService).getCvs();
};
