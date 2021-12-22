import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http : HttpClient) { }

  createUser(email : string, senha : string) {
    return this.http.post("http://localhost:3001/api/user/signup", { email, senha });
  }
}