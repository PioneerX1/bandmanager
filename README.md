## BandManager

A web app for band managers to oversee and track their band members.

#### By _**Mick Sexton**_

### Description

Users can view a list of all band members. Users can view a specific band member's details. Users can view the About page to learn more about the band's story, styles of music they play, and gigs they are open to playing. Admins can add new members and edit a member's properties, including name, instrument(s), additional skills, will travel more than 4 hours, phone number, email, and whether or not they are a section leader. Admins can also delete members.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Gulp]
* [Angular.js]
* [Bower]

## Installation

* `git clone <repository-url>` this repository
* `cd bandmanager`
* `npm install`
* `bower init`
* Install Bootstrap
* `ng serve`
* Navigate to `localhost:4200` in your browser

## Code Specs

|Behavior - Plain English|Input|Output|
|---|---|---|
|User is on home page and sees list of band members.|User clicks on a specific band member.|User sees a new page with just that band member's specific details.|
|User is on home page again.|User clicks on the About tab up top.|User navigates to the About the Band page showing more details about the overall band.|
|Admin is on home page with list of band members listed.|Admin clicks on the Admin tab below in footer.|Admin can sees same list but can now add new members.|
|Admin is on the same home page with admin controls enabled.|Admin clicks add new member button.|Admin can now add member details on the form listed.|
|Admin is on add new member form.|Admin fills out member details and clicks submit.|Admin sees list of band members again with new member added.|
|Admin sees list of members.|Admin clicks on a member for details.|Admin sees the band member's details along with additional options Edit or Delete.|
|Admin sees Edit button next band member's details.|Admin clicks Edit.|Admin sees an edit form open.|
|Admin sees edit form with placeholder info already populated for current data.|Admin makes changes to a band member's details and clicks submit.|Admin sees band member's info page listed with the updates.|
|Admin is on detail page with admin unlocked still, and sees Delete button.|Admin clicks Delete button, sees an alert prompt to confirm choice, selects OK.|Admin goes back to list of band members with that member no longer on it.|

## Known Bugs

_No known bugs or issues at this time._

## Support and contact details

_Please contact Mick Sexton at lacrookedbeat@hotmail.com for any questions, feedback, or concerns._

## Technologies Used

_Technologies used include NPM, Angular, Bower, Node.js, Javascript, Typescript, Bootstrap, SCSS, SASS, HTML, and Git_

### License

*This software operates under the MIT license.*

Copyright (c) 2017 **_Mick Sexton_**

###Angular README Documentation

# Bandmanager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
