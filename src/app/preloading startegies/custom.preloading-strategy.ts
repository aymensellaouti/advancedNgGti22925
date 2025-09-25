import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, preload: () => Observable<any>): Observable<any> {
    // Bech n9arerou est ce que route bech tebda lazyLoaded waéla preloaded
    // Bech nlazyLoady nraja3 obseravble de null
    // Bech neprechargiha nraja3 el fontion preload

    if (route.data && route.data["preload"]) return preload();
    return of(null);
  }
}
