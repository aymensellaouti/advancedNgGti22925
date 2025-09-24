import { Injectable } from "@angular/core";
import { CredentialsDto } from "../dto/credentials.dto";
import { LoginResponseDto } from "../dto/login-response.dto";
import { HttpClient } from "@angular/common/http";
import { API } from "../../../config/api.config";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { ConnectedUser } from "../dto/connected-user.model";
import { CONSTANTES } from "../../../config/const.config";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  #userSubject$ = new BehaviorSubject<ConnectedUser | null>(null);
  user$ = this.#userSubject$.asObservable();
  isLoggedIn$: Observable<boolean> = this.#userSubject$.pipe(
    map((user) => !!user)
  );
  isLoggedOut$: Observable<boolean> = this.#userSubject$.pipe(
    map((user) => !user)
  );
  constructor(private http: HttpClient) {
    this.#userSubject$.next(this.getConnectedUser());
  }

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials).pipe(
      tap((response) => {
        this.saveToken(response.id);
        const user: ConnectedUser = {
          id: response.userId,
          email: credentials.email,
        };
        // Mémoire
        this.#userSubject$.next(user);
        // Je le persiste dans le disque
        this.saveConnectedUser(user);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    this.removeToken();
    this.removeConnectedUser();
    this.#userSubject$.next(null);
  }

  saveToken(token: string) {
    localStorage.setItem(CONSTANTES.token, token);
  }

  getToken(): string {
    return localStorage.getItem(CONSTANTES.token) ?? "";
  }

  removeToken() {
    localStorage.removeItem(CONSTANTES.token);
  }

  saveConnectedUser(user: ConnectedUser) {
    localStorage.setItem(CONSTANTES.connectedUser, JSON.stringify(user));
  }

  getConnectedUser(): ConnectedUser | null {
    const user = localStorage.getItem(CONSTANTES.connectedUser);
    return user ? JSON.parse(user) : null;
  }

  removeConnectedUser() {
    localStorage.removeItem(CONSTANTES.connectedUser);
  }
}
