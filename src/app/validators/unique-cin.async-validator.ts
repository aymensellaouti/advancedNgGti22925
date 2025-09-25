import {
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors,
} from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { CvService } from "../cv/services/cv.service";

export const uniqueCinValidator = (cvService: CvService): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<null | ValidationErrors> => {
    const cin = control.value;
    if (!cin) return of(null);
    return cvService.selectByProperty("cin", cin).pipe(
      map((cvs) =>
        cvs.length ? { uniqueCin: `Le cin ${cin} existe déjà` } : null
      ),
      catchError(() => of(null))
    );
  };
};
