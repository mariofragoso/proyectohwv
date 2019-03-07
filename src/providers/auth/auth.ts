import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthProvider {

    constructor(public http: HttpClient) {

  }
obtenerDatos(){
        return this.http.get('https://jsonplaceholder.typicode.com/users');
}

    }


