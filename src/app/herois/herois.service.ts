import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IHero } from './hero.interface';
import {tap, catchError, delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroisService {

  private readonly API = `${environment.API}api/values`;

  private  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) { }
  public getAvengers(): Observable<IHero[]> {
    return this.http.get<IHero[]>(this.API).pipe(
      tap(console.log),
      delay(2000),
      catchError((err: HttpErrorResponse) => throwError(console.error()))
    );
  }
  /**
   * post
   */
  public postHero(model: IHero): Observable<string> {
    return this.http.post<IHero>(this.API, model, this.httpOptions).pipe(
      tap((response: any) => response)
    );
  }
}
