import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' 
})
export class SearchService {

  _restEndPoint = 'http://localhost:8080/rest/'

  constructor(private http: HttpClient) { }

  registerSentimentKey(sentimentKey : string) : Observable<any>{  
    return this.http.post(this._restEndPoint,sentimentKey).pipe(
      timeout(2000),
      catchError(
        errorResponse => { 
          return throwError(errorResponse);
      }));
          
  }
}
