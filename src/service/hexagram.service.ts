import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HexagramRequest } from '../model/hexagram-request';
import { HexagramResponse } from '../model/hexagram-response';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HexagramService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  askQuestion(request: HexagramRequest): Observable<HexagramResponse> {
    return this.http.post<HexagramResponse>(`${this.apiServerUrl}/api/hexagram/ask-question`, request);
  }
}
