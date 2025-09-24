import { Component, inject } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  concatMap,
  map,
  takeWhile,
  scan,
  distinctUntilChanged,
} from "rxjs";
import { Product } from "./dto/product.dto";
import { ProductService } from "./services/product.service";
import { Settings } from "./dto/product-settings.dto";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent {
  setting: Settings = {
    skip: 0,
    limit: 12,
  };
  settings$ = new BehaviorSubject<Settings>(this.setting);
  productService = inject(ProductService);
  noMoreProducts = false;
  /* Todo : Faire le nécessaire pour créer le flux des produits à afficher */
  /* Tips : vous pouvez voir les différents imports non utilisés et vous en inspirer */
  products$: Observable<Product[]> = this.settings$.pipe(
    distinctUntilChanged(),
    // {0, 12}, {12, 12}, {24, 12}
    concatMap((setting) => this.productService.getProducts(setting)),
    // ReponseApi1, ReponseAPi2,
    map((apiResponse) => apiResponse.products),
    takeWhile((products) => {
      if (!products.length) {
        this.noMoreProducts = true;
        return false;
      }
      return true;
    }),
    // [p0..P11], [P12, P23],....
    scan((oldProducts, newProducts) => [...oldProducts, ...newProducts])
  );
  constructor() {}

  more() {
    this.setting = {
      ...this.setting,
      skip: this.setting.skip + this.setting.limit,
    };
    this.settings$.next(this.setting);
  }
}
