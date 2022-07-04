import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { iObjectApi } from '../interfaces/objet-api';
import { iResponseApi } from '../interfaces/responseApi';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  ALLDATA_URL: string = 'https://dvapitest.herokuapp.com/api.php';
  USERDATA_URL: string = 'https://api.github.com/users/';
  constructor(private http: HttpClient, private router: Router) {}

  getAllData(api_key: string): Observable<any> {
    const httpOptions = {
      method: 'POST',
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }),
    };
    return this.http
      .post(this.ALLDATA_URL, { api_key }, httpOptions)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    const errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'The token is not valid',
    });

    return throwError(() => {
      return { errorMessage };
    });
  }

  getProfile(login: string): Observable<iObjectApi> {
    return this.http.get(this.USERDATA_URL + login) as Observable<iObjectApi>;
  }
}
