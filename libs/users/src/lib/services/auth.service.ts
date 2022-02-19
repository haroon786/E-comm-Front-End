import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURLUsers = environment.apiUrl + 'user';

  constructor(
    private http: HttpClient,
    private token: LocalstorageService,
    private router: Router
  ) {}

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiURLUsers}/login`, { username, password });
  }

  logout() {
    this.token.removeToken();
    this.router.navigate(['/login']);
  }
}
