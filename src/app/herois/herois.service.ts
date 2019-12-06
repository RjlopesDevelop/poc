import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IHero } from './hero.interface';
import {tap, catchError, delay, take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroisService {

  private readonly API = `${environment.API}heros`;

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
      delay(1000),
      // catchError((err: HttpErrorResponse) => throwError(console.error()))
    );
  }
  loadById(id: any) {
    return this.http.get<IHero>(`${this.API}/${id}`).pipe(take(1));
  }
  /**
   * post
   */
  public postHero(model: IHero) {
    return this.http.post<IHero>(this.API, model, this.httpOptions).pipe(
      take(1)
      // tap((response: any) => response)
    );
  }
}
