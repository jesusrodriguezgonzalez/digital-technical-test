import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { iObjectApi } from '../interfaces/objet-api';
import { iResponseApi } from '../interfaces/responseApi';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  ALLDATA_URL: string = 'https://dvapitest.herokuapp.com/api.php';
  USERDATA_URL: string = 'https://api.github.com/';
  constructor(private http: HttpClient) {}

  // getAllData(api_key: string): Observable<iResponseApi> {
  //   const config = {
  //     method: 'POST',
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //     }),
  //   };
  //   return this.http.post(this.ALLDATA_URL, {
  //     api_key,
  //     config,
  //   }) as Observable<iResponseApi>;
  // }

  getAllData(api_key: string): Observable<any> {
    console.log(api_key);
    const httpOptions = {
      method: 'POST',
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }),
    };
    return this.http
      .post(this.ALLDATA_URL, { api_key: api_key }, httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  getProfile(login: string): Observable<Array<iObjectApi>> {
    return this.http.get(this.USERDATA_URL + login) as Observable<
      Array<iObjectApi>
    >;
  }
}
