import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, filter, switchMap } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class DataService {

  constructor(private http: HttpClient) {}

  parseDataCH() {
    return this.http.get('https://raw.githubusercontent.com/daenuprobst/covid19-cases-switzerland/master/summary.json');
  }

  parseCantonData() {
    var todayDate = new Date().toISOString().slice(0,10);
    return this.http.get('http://cors-anywhere.herokuapp.com/http://covid19-rest.herokuapp.com/api/openzh/v1/country/CH?date=' + todayDate);
  }

  parseFLData() {
    var todayDate = new Date().toISOString().slice(0,10);
    return this.http.get('http://cors-anywhere.herokuapp.com/http://covid19-rest.herokuapp.com/api/openzh/v1/country/FL?date=' + todayDate);

  }
}
