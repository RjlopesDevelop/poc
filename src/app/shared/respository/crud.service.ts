import { HttpClient } from '@angular/common/http';
import { take, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';


export class CrudService<T> {

  constructor(protected http: HttpClient, private API_URL) { }

  getAvengers(): Observable<T[]> {
    return this.http.get<T[]>(this.API_URL).pipe(
      // tap(console.log),
      delay(1000),
      // catchError((err: HttpErrorResponse) => throwError(console.error()))
    );
  }

  loadById(id: any) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }
  /**
   * post
   */
  private postHero(model: T) {
    return this.http.post<T>(this.API_URL, model).pipe(
      take(1)
      // tap((response: any) => response)
    );
  }
  private putHero(model: T) {
    return this.http.put(`${this.API_URL}/${model['id']}`, model).pipe(take(1));
  }

  save(model: T) {
    if (model['id']) {
      return this.putHero(model);
    }
    return this.postHero(model);
  }
  remove(id: any) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));

  }

}
