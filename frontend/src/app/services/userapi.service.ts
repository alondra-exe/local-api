import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserApiService {
    private url = "http://localhost:8080/users";

    constructor(private http: HttpClient) { }

    getAllUser(): Observable<User[]> {
        return this.http.get<User[]>(this.url);
    }

    getUserById(id: number): Observable<User> {
        let urlApi = `${this.url}/${id}`;
        return this.http.get<User>(urlApi);
    }

    postUser(user: User): Observable<User> {
        return this.http.post<User>(this.url, user);
    }

    putUser(user: User): Observable<User> {
        let urlApi = `${this.url}/${user.id}`;
        return this.http.put<User>(urlApi, user);
    }

    patchUser(user: User): Observable<User> {
        let urlApi = `${this.url}/${user.id}`;
        return this.http.patch<User>(urlApi, user);
    }

    deleteUser(id: number): Observable<User> {
        let urlApi = `${this.url}/${id}`;
        return this.http.delete<User>(urlApi);
    }
}
