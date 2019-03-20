import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ships } from './models/ships.model';
import { People } from './models/people.model';


@Injectable({
  providedIn: 'root'
})

export class APIService {
  private apiPeople = 'https://swapi.co/api/';
  // private apiShips = 'https://swapi.co/api/starships/';
  // private apiFilms ='https://swapi.co/api/films/';

  constructor(private http: HttpClient) { }
    
  searchPeople(kind: any, term: any) : Observable<any> {
    return this.http.get<any>(this.apiPeople + kind + '/?search=' +term)
  }

  // searchShips() : Observable<Ships[]> {
  //   return this.http.get<Ships[]>(this.apiShips);
  // }

  // searchFilms() : Observable<Films[]> {
  //   return this.http.get<Films[]>(this.apiFilms);
  // }

  // getData() {
  //   console.log("temp")
  // }
}
