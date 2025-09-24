import { Injectable } from "@angular/core";
import { CredentialsDto } from "../dto/credentials.dto";
import { LoginResponseDto } from "../dto/login-response.dto";
import { HttpClient } from "@angular/common/http";
import { API } from "../../../config/api.config";
import { Observable } from "rxjs";
import { ConnectedUser } from "../dto/connected-user.model";
import { CONSTANTES } from "../../../config/const.config";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user$!: Observable<ConnectedUser | null>;
  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$!: Observable<boolean>;
  constructor(private http: HttpClient) {}

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    this.removeToken();
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
}
