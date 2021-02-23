import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userName: string;
  apiUrl: string = "https://api.github.com/users/";


  constructor(public http: HttpClient) {
    this.userName = "Jeanbede";
  }

  getUserDetails() {
    return this.http.get(this.apiUrl + this.userName)
  }
  getRepos() {
    return this.http.get(this.apiUrl + this.userName)
  }
  updateUserName(userName: string) {
    this.userName = userName;

  }
}
