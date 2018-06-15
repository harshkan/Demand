import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoService {

    constructor(private http:HttpClient) {
    }

    // NOTE: all API calls in this file use simple endpoints served by
    // an Express app in the file app.js in the repo root. See that file
    // for all back-end code.
    // Uses http.get() to load data from a single API endpoint
    getForm() {
        return this.http.get('http://10.95.215.58:8080/get-requirement-by-ids?ids=1');
    }

    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // The entire operation will result in an error state if any single request fails.

    // send a POST request to the API to create a new data object
    createRequest(request) {
        let body = JSON.stringify(request);
        return this.http.post('http://10.95.215.58:8080/add-requirement', body, httpOptions);
    }

    // send a PUT request to the API to update a data object
    updateFood(request) {
        let body = JSON.stringify(request);
        return this.http.put('http://10.95.215.58:8080/update-requirement', body, httpOptions);
    }

    // send a DELETE request to the API to delete a data object
    deleteRequest(request) {
        return this.http.delete('http://10.95.215.58:8080/delete-requirement');
    }

}
