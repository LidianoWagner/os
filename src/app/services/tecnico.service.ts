import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack : MatSnackBar) { }

  findAll():Observable<Tecnico[]> {
    const url = this.baseUrl + "/tecnicos";
    return this.http.get<Tecnico[]>(url);
  }

  create(tecnico: Tecnico):Observable<Tecnico> {
    const url = this.baseUrl + "/tecnicos";
    return this.http.post<Tecnico>(url, tecnico);
  }

  message(msg : String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
