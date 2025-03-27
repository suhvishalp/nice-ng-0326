NICE: 26 March

HTML
    - 'what' contents you want to place on the web browser 
    - to define the structure of the webpage

CSS 
    - 'how' the content should appear on the webpage
    - to define style rules for the webpages

JavaScript  
    - provide programming capabilities for the webpages 
    - every browser has a JS engine, that executes the js code inside the browser 

        - chrome    - v8
        - firefox   - spider monkey 
        - IE        - chakra 
        ..

        1997    - ES1
        1998    - ES2
        1999    - ES3
        2009    - ES5

        2015    - ES6   | ES2015

    - handle user interactions 
    - ajax calls / http requests 
    - form validations
    - business logic 

ES6
    - specifications / standards that the browser has to implement 

    - arrow functions
    - object/array destructuring 
    - promises
    - async / await
    - classes and objects
    - module system


    arithAdd(a, b){

    }

    arithAdd()

TypeScript 
    - superset of javascript
    - in addition, ts has type safe features
    - compiled language, ts code is compiled into js code

    arithAdd(a:number, b:number){

    }

JQuery 
    - js library 

Bootstrap
    - html+css+js for responsive web pages 

Backbone.js
    - js library 


Angular 
    - framework for building web applications using typescript

React 

VueJS

webpack / babel





languages                   libraries                   frameworks 

Java                        utils, io, jdbc, ...        Spring
                            ..


C#                          .. .. .. ..                 .net 


Javascript                  JQuery, React               Angular
typescript                  Bootstrap   
                            ag-grid
                            backbone.js

      |                         |                           |
programming                 simplifies the tasks        standardizes the process 
capabilities                                                of developing the apps





Angular 
------------------------
    - Framework written in typescript for building web applications 
    •	A front-end JavaScript framework
    •	Helps build advanced, feature-rich, interactive web UIs


Why use Angular?
•	Simplifies UI development compared to using plain JavaScript
•	Provides structure, rules, and reusable packages

Beyond the Framework:
•	Angular includes a tooling ecosystem:
    o	CLI (Command Line Interface) for project setup and dev server
    o	Debugging tools and IDE plugins
    o	Enhances developer productivity and experience

Use Cases:
    •	Suitable for projects ranging from simple websites to enterprise-level apps


    - Angular CLI

            npm install -g @angular/cli

    - create angular project 

         - ng new my-app

    <app-header />

    @Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styles: []
    })
    export class Header {
        //data members / fields
        ..

        ...

        //logic 
    }



    FormGroup 
        - FormGroup instance is used to track aggregate form value and validation status.

    FormControl
        - FormControl instance is used to track value and validation status of an individual form element 

    
    Template Driven Forms 
        - the FormGroup and FormControl objects are created implicitely just by adding some directives i.e. ngForm, ngModel in the template 


    Reactive Forms 
        - the FormGroup and FormControl objects are created explicitely in the TS code 


new FormControl(
    value: FormControlState<T> | T,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | FormControlOptions | null, 
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null)


interface ValidatorFn {
  (control: AbstractControl<any, any>): ValidationErrors | null;
}

 - this type represents a type for a validator function
 - there are some predefined validtor functions avaialble in class "Validators"



 interface AsyncValidatorFn {
  (control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
}