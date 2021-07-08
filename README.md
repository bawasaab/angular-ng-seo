<<<<<<< HEAD
[![Run on Repl.it](https://repl.it/badge/github/erdkse/adminlte-3-angular)](https://repl.it/github/erdkse/adminlte-3-angular)

# Admin LTE 3.1.0 - Angular 12.0.0

To login website use:

`username:` admin@example.com<br />
`password:` admin<br />

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
# angular-ng-seo

https://www.techiediaries.com/angular-seo-server-side-rendering-with-angular-universal/

Angular 10/9 SEO: Rendering Your App on Server-side with Angular Universal
In this tutorial, we'll be learning about Angular 10 SEO and we'll see by example in a 3 easy steps how you can render your Angular 10 application on the server to make it SEO friendly and boost its performance using the Angular Universal technology.

Why you Need SEO in Angular 10?
Search Engine Optimization or SEO is an important feature in any web application because they allow your app to be discovered by search engines and social media networks.

You can build SEO-friendly Angular apps by server-rendering your apps with Angular Universal.

Let's see how to do that by example!

Step 1 - Setting up Angular 10 CLI and Initializing a Project
In the first step, you need to install Angular 10 CLI and intialize a new project.

Feel free to skip this step if you have an Angular 10 project ready!

Head to a new command-line interface and run the following commands:

$ npm install -g @angular/cli

You would need to have Node.JS and NPM installed on your machine.

Next, run the following command to initialize a project:

$ ng new angular-10-seo-app

Step 2 - Setting up Angular 10 Universal for SEO
The next step is to set up Angular 10 Universal in your project.

Thanks to the ng add command available on Angular CLI v7+, you can add server-side rendering in your project with a few commands using the @nguniversal/express-engine schematic.


 
Go back to your command-line interface, and start by navigating to your project's folder:

$ cd ~/angular-10-seo-app

Next, run:

$ ng add @nguniversal/express-engine --clientProject angular-10-seo-app

The shematic will automatically add the required configurations and packages to your project and will even add an Express server.

The Express server will render a part of your Angular 10 app and return HTML to the browser. The server runs on the 4000 port by default

Step 3 - Server Rendering the Angular 10 App with Express Server
That's it, we have confugured our Angular 10 application for server-side rendering and made it SEO friendly without nearly zero efforts. In this step, we'll build and run the Express server.

Go back to your terminal and run the following commands:

$ npm run build:ssr 

$ npm run serve:ssr

This will build your project with SSR support and start the Express server from the http://localhost:4000 address.

Open your web browser and go to that address, you should see your Angular app running just like the ng serve command.

Conclusion
In this tutorial, we have created an Angular 10 Universal app by adding server-side rendering in 3 easy steps. This will make our application SEO friendly i.e can be easily dicoverable by search engines and boost its performance.
>>>>>>> a82a7d2ba8234f95d4ac053c0e274c700943fb4a
