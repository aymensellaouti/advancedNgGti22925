import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardProfilComponent } from "../components/card-profil/card-profil.component";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";
import { CvCardComponent } from "./cv-card/cv-card.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";
import { EmbaucheComponent } from "./embauche/embauche.component";
import { ItemComponent } from "./item/item.component";
import { ListComponent } from "./list/list.component";
import { MasterDetailsComponent } from "./master-details/master-details.component";
import { DefaultImagePipe } from "./pipes/default-image.pipe";
import { CvRoutingModule } from "./cv-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    // Cv
    AddCvComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailsCvComponent,
    CvCardComponent,
    CardProfilComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    AutocompleteComponent,
    MasterDetailsComponent,
  ],
  imports: [CommonModule, FormsModule, CvRoutingModule, ReactiveFormsModule],
})
export class CvModule {}
