# angular2_components
This example is for getting started with Components 
-creating Components
-working with Component templates (inline and external)
-working with Component styles (inline and external)


How to start local application using CLI
========================================
Make sure to install node.js and npm if they are not already on your machine https://docs.npmjs.com/getting-started/installing-node
http://cli.angular.io
npm install -g @angular/cli
ng new my-first-app
cd my-first-app
ng serve

Issue: If encountered port 4200 is already in use
solution: 
find the process id using the port and kill it
netstat -a -n -o
taskkill /PID 15940 /F
[or] use the other port 
ng server --port 4700

create components using cli
--------------------------
ng generate component servers  
ng g c servers

It creates a folder with name servers and creates all the component files and also adds required import statements in app.module.ts

Install bootstrap for styling
-----------------------------
To install bootstrap
my-first-app> npm install --save bootstrap
In angular-cli.json add ../node_modules/bootstrap/dist/css/bootstarp.min.css in styles

Debugging
-----------
Augury https://augury.angular.io/ Chrome extension can be used for debugging Angular 2 applications
It also helps developers to visualize the application through component trees and dependencies through injector graph

What is Angular
==============
Framework that allows to create a reactive single page application, re-rendering parts of DOM to update the page.

-Components
-Data Binding
-Directives
-Services & Dependency Injection
-Routing
-Observables
-Forms
-Pipes
-Http
-Authentication
-Optimizations NgModules
-Deployment
-Animations & Testing

What is TypeScript
==================
Superset to Javascript
strong typing
doesnt run in browser, gets compiled to javascript by angular CLI

Understanding Angular application files and folders with structure
==================================================================

src
---
	app
		app.component.ts
		app.component.html
		app.component.css
		app.component.spec.ts
		app.module.ts
	assets
		.gitkeep
	environments
		environment.prod.ts
		environment.ts
	favicon.ico
	index.html
	main.ts
	style.css
	polyfill.ts
	test.ts
	tsconfig.app.json
	tsconfig.spec.json
	
app.component.ts(html,css,spec) - Root component. Defines AppComponent along with html, css and a unit test. As the application evolves, because tree of nested components

app.module.ts                   - Root module. Defines AppModule. Tells angular how to assemble the application. All the components are declared here

assets                          - Folder where assets such as images to be copied wholesale when building application

environments                    - Folder contains one file for each environment, each exporting simple configuration variables to be used in the application

favicon                         - Angular icon on the bookmark bar

index.html                      - The main HTML page served when someone visits the site. Js and Css are automatically added by CLI while building the app

main.ts                         - Main entry point of the application. 
                                  Compiles the application using JIT compiler and bootstraps the AppModule (application's root module) to run it in the browser.

style.css                       - Global styles that affect the entire application goes here.

polyfill.css                    - Helps normalize the differences that different browsers have for the web standards.

test.ts                         - Main entry point for unit tests

tsconfig.(app|spec).json        - TypeScript compiler configuration for the app (tsconfig.app.json) and for unit tests (tsconfig.spec.json)

		
root
----

myapp
	e2e 
		app.e2e.spec.ts
		app.po.ts
		tsconfig.e22.json
	node_modules/.. 
	src/..
	.angular-cli.json
	.editor.config
	.gitignore
	karma.conf.js
	package.json
	protractor.conf.js
	README.md
	tsconfig.json
	tslint.json
	
e2e/                - End to end tests
node_modules/       - Folder created by Node.js to put all third party modules listed in package.json
.angular-cli.json    - configuration for angular CLI
.editor.config       - Simple configuration for editor to make sure everyone using the project has the same basic configuration
.gitignore          - To make sure autogenerated files are not committed to source control
karma.conf.js       - Unit test configuration for Karma test runner
package.json        - npm configuration listing third party packages used by project. Custom scripts can also be added here
protractor.conf.js  - end to end test configuration for protractor
README.md           - Basic documentation for your project prefilled with CLI information
tsconfig.json       - TypeScript compiler configuration for IDE to pick and provide helpful tooling
tslint.json         - Linting configuration for TSLint together with Codelyzer. Linting helps to keep code style consistent

Main.ts
--------
Main entry point of the application. 
Compiles the application using JIT compiler and bootstraps the AppModule (application's root module) to run it in the browser.

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);


App Module
----------
Root module of the application which defines AppModule. All the application components are declared here, services are registered with providers.
Bundle of functionalities of app and it basically gives angular the information that app uses.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

components
=============
It is a typescript class which Angular instantiates to create objects based on the blue print given in Component

Angular application is made of Components which contains HTML template and a Component class that controls the portion of a screen.

import { Component} from '@angular/core';

@Component ({
	selector: 'my-app',
	template:` 
		<h1> Hello, {{name}} </h1>
		`,
	styles: [`
		h3 {
			color: blue;
		}
		`],
	templateUrl: './app.component.html', //used instead of template
	styleUrls: ['./app.component.css'] //used for external style sheets
})
export class AppComponent {
	name: string = 'Sandhya';
}

@Component : Every Component starts with a decorator @Component which takes metadata object that describes how html template and component class work together
----------
selector   : Selector name identifies a Component. It tells angular to display this component in custom tag whereever it is used.
---------
alternatives: 

- to use as a attribute 
selector: '[my-app]' //in component.ts
<div my-app></div>   //in html file

- to use as a class
selector: '.my-app'
<div class= "my-app"></div>

template   : Template has what is presented on page. Use back ticks for multiline code for inline template. templateUrl can be used to refer to the corresponding html template.
--------
StyleUrls  : To refer component specific style sheet. 'Styles' with backticks is used in case of inline styles
---------










