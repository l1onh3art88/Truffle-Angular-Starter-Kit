import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService extends RepositoryService<User>{
  protected endPoint = "http://localhost:3000/users";
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

}
