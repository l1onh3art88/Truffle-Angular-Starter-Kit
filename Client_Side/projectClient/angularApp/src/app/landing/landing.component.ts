import { User } from './../domain/models/user';
import { Web3Service } from '../domain/services/web3.service';
import { Component, OnInit } from '@angular/core';
import { UserRepositoryService } from '../domain/services/user-repository.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private web3Service: Web3Service, private userRepository: UserRepositoryService) {
    console.log("constructor: "+web3Service);

  }
  accounts: string[];

  account= {
    name: "Wallet",
    balance: 0,
    address: ""
  }
  users:User[];
  ngOnInit() {
    this.watchAccount();
    this.userRepository.get().subscribe( data =>{
      this.users = data;
      console.log(this.users);
    })
  }
  watchAccount() {
    this.web3Service.accountsObservable.subscribe({
      next: (accounts) => {
        this.accounts = accounts;
        this.account.address = accounts[0];

        console.log(this.account.address);
      }
    });
  }


}
