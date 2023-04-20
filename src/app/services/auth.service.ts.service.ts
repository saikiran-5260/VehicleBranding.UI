import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceTsService {
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient) {}

  baseUrl = 'https://localhost:7045/api/';

  registerUser(user: Array<any>) {
    return this.http.post(
      this.baseUrl + 'User/CreateUser',
      {
        firstName: user[0],
        lastName: user[1],
        email: user[2],
        mobile: user[3],
        gender: user[4],
        pwd: user[5],
      },
      {
        responseType: 'text',
      }
    );
  }
  loginUser(loginInfo: Array<any>) {
    return this.http.post(
      this.baseUrl + 'User/LoginUser',
      {
        email: loginInfo[0],
        pwd: loginInfo[1],
      },
      {
        responseType: 'text',
      }
    );
  }
  setToken(token: string) {
    localStorage.setItem('access_token', token);
    this.loadCurrentUser();
  }
  loadCurrentUser() {
    const token = localStorage.getItem('access_token');
    const userInfo =
      token != null ? this.jwtHelperService.decodeToken(token) : null;
    const data = userInfo
      ? {
          id: userInfo.id,
          firstname: userInfo.firstName,
          lastname: userInfo.lastName,
          email: userInfo.email,
          mobile: userInfo.mobile,
          gender: userInfo.gender,
        }
      : null;
    this.currentUser.next(data);
  }

  isLoggedin(): boolean {
    return localStorage.getItem('access_token') ? true : false;
  }

  removeToken() {
    localStorage.removeItem('access_token');
  }
}
