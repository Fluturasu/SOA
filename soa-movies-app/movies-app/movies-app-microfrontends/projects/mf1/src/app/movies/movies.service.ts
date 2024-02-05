import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../movie";

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://localhost:8000/movies';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikc0dFBxYlBFOE5zaXdoWXhzc3YzaCJ9.eyJpc3MiOiJodHRwczovL2Rldi1kcnlubmtoMWdkNTJrd3g4LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJlM1BIWGZkblAxNzNTaHBtNkJlMVhzU0ZIN3lOWGxzN0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9tb3ZpZXMtYXBwIiwiaWF0IjoxNzA3MDc5MDM0LCJleHAiOjE3MDcxNjU0MzQsImF6cCI6ImUzUEhYZmRuUDE3M1NocG02QmUxWHNTRkg3eU5YbHM3IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.i5Yiks2Y9-X8ypG4F7K6VpIsES9P2YmkvgGCHyh25HbR4hrBkt5BfqQVdMIwJqMbwvPo6rGJ5wiEbdsjwjO2QbgxYHuYikZxWdxnFAhXLzUxL8GdZ5cnllyPJpv54O_8-yj2dqZTYoypZcqg3qbzOcoIzu5B2XZozHehLrru5skmaiabW2hqSiq18Ijd18Ob5icVm0IpttB6z5oKk83pi-VAnNZXwayQt0e1UARaGWN4_SeZEPfrmLf-u9AayzJrbIgJXgRKuwZ7B9WXHg6RYMRE1K1gpsI_xnSoVQxNuMPlAZgfrLTp7MKBT3hUZv6J2KXJ9sILZJDcXd1cyPRE_A' })
  };

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl, this.httpOptions);
  }

  deleteMovie(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, this.httpOptions);
  }
}
