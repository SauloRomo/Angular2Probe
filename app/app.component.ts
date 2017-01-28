import {Component} from 'angular2/core';
import { BooksComponent } from './books/books.component';
import { LibroService } from './books/libro.service';

@Component({
    selector: 'my-app',
    template: '<h1>Hola {{ name }} ! </h1> <libros></libros>',
    directives: [BooksComponent ]
})
export class AppComponent {
    name = 'Saulo' ;
 }
