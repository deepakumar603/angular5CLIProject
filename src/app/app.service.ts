import {Injectable} from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
// All the RxJS stuff we need
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
 
//import {Post} from './post';

@Injectable()
export class AppService {
    // Url to API
    private getUrl = 'https://api.github.com/search/repositories?q=';
 
    // Injecting the http client into the service
    constructor(private http: Http) {}
 
    // Method retrieve all the posts
    getSearchData (key): Observable<any[]> {
        return this.http.get(this.getUrl+key)
            .map(this.parseData)
            .catch(this.handleError);
    }
 
    // This method parses the data to JSON
    private parseData(res: Response)  {
        return res.json() || [];
    }
 
    // Displays the error message
    private handleError(error: Response | any) {
        let errorMessage: string;
 
        errorMessage = error.message ? error.message : error.toString();
        return Observable.throw(errorMessage);
    }
}