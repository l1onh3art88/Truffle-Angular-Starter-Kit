#Truffle Angular Starter Kit
=================================

The project is structured into two parts.

Client
Server


## Client

### Angular
--------------
Type `npm install` to install all dependencies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### Truffle
Type `truffle compile` to compile contracts

This project uses ganache to run a testrpc.

Open a new terminal and type `ganache-cli` to start a testrpc. 
Take note of the seed phrase and private keys of accounts

Type `truffle migrate` when the ganache server is up and running. 
You should see the contracts creation in the terminal running ganache

Type `npm start` to then load up the angular project

## Server
Type `npm install` to install all dependencies

Change line 4 in the "users.js" to match your database credentials

Type `npm start` to run the express server

## Good Luck





