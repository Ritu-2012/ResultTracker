import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://atdebjoy.com/others/api/perform/basic_details.php';
  private cards = new BehaviorSubject([])
  cast = this.cards.asObservable();

  
 

  constructor( private http: HttpClient) { }

  getCards(){
    return this.http.get(this.url+"?profile&stud_id=42&pass=1234abcd");
  }

  getCards2(){
    return this.http.get(this.url+"?stud_id=42&pass=1234abcd");
  }
}
