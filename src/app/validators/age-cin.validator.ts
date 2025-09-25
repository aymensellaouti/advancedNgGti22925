import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const ageCin: ValidatorFn = (
  form: AbstractControl
): null | ValidationErrors => {
  const cin = form.get("cin")?.value?.substring(0, 2);
  const age = form.get("age")?.value;
  if (!cin || !age) return null;
  if ((age >= 60 && cin > 19) || (age < 60 && cin <= 19))
    return { ageCin: `L'age et le cin ne correspondent pas` };
  return null;
};
