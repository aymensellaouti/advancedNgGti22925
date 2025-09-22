import { Observable } from "rxjs";
import { Cv } from "../model/cv";

export abstract class AbstractCvService {
  abstract getCvs(): Observable<Cv[]>;
}
