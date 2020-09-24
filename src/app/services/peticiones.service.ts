import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesSevice {
    public url: string;

    constructor(
        public http: HttpClient) {
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }
    getPrueba() {
        return "Hola mundo desde el service.";
    }
 
    getArticulos(): Observable<any>{
        return this.http.get(this.url);
    }
}