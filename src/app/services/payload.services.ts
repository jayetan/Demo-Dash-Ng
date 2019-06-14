import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataTableItem } from '../models/table.model';

@Injectable()
export class PayloadService {
  private serviceUrl =
    'https://raw.githubusercontent.com/PerxTech/angular-interview/master/example.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<DataTableItem[]> {
    return this.http.get<any>(this.serviceUrl).pipe(
      map(model => {
        return model.data;
      })
    );
  }
}
