import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationInitStatus, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/144b1fe8-3c36-4a0f-b9be-8ae096a5a0e4'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D. - create, read, update, delete
  // Retorna a lista de usuarios (READ)

  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // Salva ususario no banco CREATE
  postUser(user: User):Observable<User> {
    return this.httpClient.post<User> (this.apiUrl, user, this.httpOptions)
  }

  // Exclui o usuario do banco DELETE
  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  //Edita Usuario  UPDATE
  updateUser(id: string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  //Lista usuario unico
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}
