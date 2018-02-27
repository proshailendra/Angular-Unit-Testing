import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

import { environment as env } from "../../environments/environment";
import { User } from '../models/user';

@Injectable()
export class UserService {
    headers: Headers;
    constructor(private http: Http) {
        this.headers = new Headers({ 'content-type': 'application/json;utf8' });
    }
    GetUsers(): Observable<User[]> {
        return this.http.get(env.apiAddress + "/user").map((res) => {
            return res.json();
        }).catch((err) => Observable.throw(err));
    }
    GetUser(id: number): Observable<User> {
        return this.http.get(env.apiAddress + "/user/" + id).map((res) => {
            return res.json();
        }).catch((err) => Observable.throw(err.json().error || 'Server error'));
    }
    AddUser(user: User): Observable<Response> {
        return this.http.post(env.apiAddress + "/user", JSON.stringify(user), new RequestOptions({ headers: this.headers })).catch((err) => Observable.throw(err.json().error || 'Server error'));
    }

    // GetUsers(): Promise<User[]> {
    //     return this.http.get(env.apiAddress + "/user")
    //     .toPromise()
    //     .then((response:any) => {
    //         console.log(response);
    //         return response.json().data;
    //     })
    //     .catch(error => Promise.reject(error.message || error));       
    // }
}