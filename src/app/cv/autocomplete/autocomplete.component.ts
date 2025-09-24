import { Component, inject, OnDestroy } from "@angular/core";
import { FormBuilder, AbstractControl } from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subscription,
  switchMap,
  tap,
} from "rxjs";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";
import { Router } from "@angular/router";

@Component({
  selector: "app-autocomplete",
  templateUrl: "./autocomplete.component.html",
  styleUrls: ["./autocomplete.component.css"],
})
export class AutocompleteComponent implements OnDestroy {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  form = this.formBuilder.group({ search: [""] });
  selectCvSubscription!: Subscription;
  router = inject(Router);
  cvs$: Observable<Cv[]> = this.search.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    // tap((chaine) => console.log(chaine))
    switchMap((search) => this.cvService.selectByName(search))
  );
  constructor() {
    this.selectCvSubscription = this.cvService.selectedCV$.subscribe({
      next: (cv) => this.router.navigate(["/cv", cv.id]),
    });
  }
  ngOnDestroy(): void {
    this.selectCvSubscription.unsubscribe();
  }
  get search(): AbstractControl {
    return this.form.get("search")!;
  }
}
