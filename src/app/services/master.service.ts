import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  // private locations: any[] = [];
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchAllLocations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetBusLocations`);
  }

  searchBus(from: string, to: string, date: string): Observable<any> {
    const body = { from, to };
    return this.http.get<any[]>(
      `${this.apiUrl}/SearchBus?fromLocation=${from}&toLocation=${to}&travelDate=${date}`
    );
  }
}
