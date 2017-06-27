# FAST-MOVIES

A  TMDB's client app developed in [Angular 4](https://angular.io/) in the Alert Logic Inc's course. It was implemented with no routes, just components, services and event emitters; a single one page Web App. Besides, the principal app's resources are:

* Movies,TvShows, People - Components && Services

They will allow you to:

* Find Movies, see Movies' detail, see Popular Movies
* Find TvShows, see a Tv show's detail, see Popular Tv Shows
* Find People, see Person's detail, see Popular celebrities

**Author:** Jhon Pantoja

## Deployment

For github pages deployment use:
* Verify if `"deploy": "ngh"` is added to the package's scripts
* `ng build --prod -base-href .` (IMPORTANT! DO NOT FORGET THE '.') 
* `npm run deploy`

# Notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
