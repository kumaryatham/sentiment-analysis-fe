import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('http://localhost:8080/users/all');
    }

    register(user: User) {
        user.role = 'USER';
        return this.http.post('http://localhost:8080/users/register', user);
    }

    delete(username: string) {
        console.log("username:>  " + username);
        return this.http.delete('http://localhost:8080/users/delete/'+ username);
    }
}