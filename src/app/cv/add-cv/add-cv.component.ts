import { Component, inject, OnDestroy } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from "@angular/forms";
import { CvService } from "../services/cv.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { APP_ROUTES } from "src/config/routes.config";
import { Cv } from "../model/cv";
import { CONSTANTES } from "../../../config/const.config";
import { filter, tap } from "rxjs";
import { uniqueCinValidator } from "../../validators/unique-cin.async-validator";
import { ageCin } from "../../validators/age-cin.validator";

@Component({
  selector: "app-add-cv",
  templateUrl: "./add-cv.component.html",
  styleUrls: ["./add-cv.component.css"],
})
export class AddCvComponent implements OnDestroy {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  router = inject(Router);
  toastr = inject(ToastrService);
  constructor() {
    this.age.valueChanges.subscribe({
      next: (age) => {
        if (age < 18) this.path?.disable();
        else this.path?.enable();
      },
    });
    // this.form.statusChanges
    //   .pipe(
    //     filter(() => this.form.valid),
    //     tap(() => {
    //       localStorage.setItem(
    //         CONSTANTES.savedAddForm,
    //         JSON.stringify(this.form.value)
    //       );
    //     })
    //   )
    //   .subscribe();
    const savedForm = localStorage.getItem(CONSTANTES.savedAddForm);
    if (savedForm) {
      this.form.patchValue(JSON.parse(savedForm));
    }
  }
  form = this.formBuilder.group(
    {
      name: ["", Validators.required],
      firstname: ["", Validators.required],
      path: [""],
      job: ["", [Validators.required], []],
      cin: [
        "",
        {
          validators: [Validators.required],
          asyncValidators: [uniqueCinValidator(this.cvService)],
          updateOn: "blur",
        },
      ],
      age: [
        0,
        {
          validators: [Validators.required],
          updateOn: "blur",
        },
      ],
    },
    {
      validators: [ageCin],
      asyncValidators: [],
    }
  );

  addCv() {
    this.cvService.addCv(this.form.getRawValue() as Cv).subscribe({
      next: () => {
        this.toastr.success(`Le cv a été ajouté avec succès`);
        localStorage.removeItem(CONSTANTES.savedAddForm);
        this.form.reset();
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (erreur) => {
        console.log(erreur);
        this.toastr.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      },
    });
  }
  ngOnDestroy(): void {
    if (this.form.valid) {
      localStorage.setItem(
        CONSTANTES.savedAddForm,
        JSON.stringify(this.form.value)
      );
    }
  }

  get name(): AbstractControl {
    return this.form.get("name")!;
  }
  get firstname() {
    return this.form.get("firstname");
  }
  get age(): AbstractControl {
    return this.form.get("age")!;
  }
  get job() {
    return this.form.get("job");
  }
  get path() {
    return this.form.get("path");
  }
  get cin(): AbstractControl {
    return this.form.get("cin")!;
  }
}
