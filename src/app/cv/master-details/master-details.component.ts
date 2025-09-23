import { Component, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-master-details",
  templateUrl: "./master-details.component.html",
  styleUrls: ["./master-details.component.css"],
})
export class MasterDetailsComponent {
  router = inject(Router);
  activatedRouted = inject(ActivatedRoute);
  cvs: Cv[] = this.activatedRouted.snapshot.data["cvs"];

  constructor(private toastr: ToastrService, private cvService: CvService) {
    this.cvService.selectedCV$.subscribe({
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
}
