import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServerDataService {

  constructor(private http: Http) {}

  getData() : Promise<string> {
    const url = `api/data`;
    return this.http.get(url).toPromise().then(response => response).catch(this.handleError);
  }

  getCategories() : Promise<string> {
    const url = `api/category`;
    return this.http.get(url).toPromise().then(response => response).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
