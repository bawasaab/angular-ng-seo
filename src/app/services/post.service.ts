import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public apiEndPoint: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.apiEndPoint = `https://jsonplaceholder.typicode.com/posts`;
  }

  	getHttpJsonOptions() {
		let httpOptions = {
			headers: new HttpHeaders({
				// Authorization: `Bearer ${this.token}`,
				'Content-Type': 'application/json',
			}),
		};
		return httpOptions;
	}

  	getUserById(postId: number): Observable<any> {
		  
		let url = `${this.apiEndPoint}/${postId}`;
		return this.httpClient
			.get(url)
			.pipe(
				// map((e: Response) => e),
				catchError((e: Response) => throwError(e))
		);
	}
}
