import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { authGuard } from "../auth/guards/auth.guard";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { cvsResolver } from "./cvs.resolver";
import { DetailsCvComponent } from "./details-cv/details-cv.component";
import { MasterDetailsComponent } from "./master-details/master-details.component";

export const CV_ROUTES = [
  {
    path: "cv",
    children: [
      {
        path: "",
        component: CvComponent,
      },
      { path: "add", component: AddCvComponent, canActivate: [authGuard] },
      {
        path: "list",
        component: MasterDetailsComponent,
        resolve: {
          cvs: cvsResolver,
        },
        children: [
          {
            path: ":id",
            component: DetailsCvComponent,
          },
        ],
      },
      { path: ":id", component: DetailsCvComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(CV_ROUTES)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
