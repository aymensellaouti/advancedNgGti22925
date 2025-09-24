import { Component, inject, OnDestroy } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: "app-master-details",
  templateUrl: "./master-details.component.html",
  styleUrls: ["./master-details.component.css"],
})
export class MasterDetailsComponent {
  router = inject(Router);
  activatedRouted = inject(ActivatedRoute);
  cvs: Cv[] = this.activatedRouted.snapshot.data["cvs"];
  completeStream = new Subject<void>();
  constructor(private toastr: ToastrService, private cvService: CvService) {
    this.cvService.selectedCV$
      .pipe(
        // takeUntil(this.completeStream)
        takeUntilDestroyed()
      )
      .subscribe({
        next: (cv) => this.onSelectCv(cv),
      });
    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => {
    //     this.cvs = cvs;
    //   },
    //   error: () => {
    //     this.cvs = this.cvService.getFakeCvs();
    //     this.toastr.error(`
    //       Attention!! Les données sont fictives, problème avec le serveur.
    //       Veuillez contacter l'admin.`);
    //   },
    // });
  }

  onSelectCv(cv: Cv) {
    this.router.navigate([cv.id], {
      relativeTo: this.activatedRouted,
    });
  }
  // ngOnDestroy(): void {
  //   this.completeStream.next();
  //   this.completeStream.complete();
  // }
}
