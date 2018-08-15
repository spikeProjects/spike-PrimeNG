import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get('https://www.primefaces.org/primeng/assets/showcase/data/countries.json')
      .toPromise()
      .then(res => <any[]> (res as any).data)
      .then(data => {
        return data;
      });
  }
}
