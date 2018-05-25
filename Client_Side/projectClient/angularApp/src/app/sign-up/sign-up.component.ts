import { User } from './../domain/models/user';
import { UserRepositoryService } from './../domain/services/user-repository.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( private userRepository: UserRepositoryService) { }
  user: User;
  ngOnInit() {
    this.user={
      "username":"",
      "password":""
    };
  }

  signUp(){
    console.log(this.user);
    this.userRepository.add(this.user).subscribe(data => {
      this.user={
        "username":"",
        "password":""
      };
    });
  }
}
