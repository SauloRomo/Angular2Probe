import { Component } from 'angular2/core';
import { LibroService } from './libro.service';

@Component ({
    selector : 'libros',
    template: `<span>Lista de libros :</span>
        <input type="text" name="title" [(ngModel)]="title" />
        <button (click)="addTitulo()">add</button>
            <ul>
                <li *ngFor = "#libro of libros">{{ libro }}</li>
            </ul>
    `,
    providers: [LibroService] 
    
})


export class BooksComponent  {
    libros = [];
    title = "";

 addTitulo(){
     if(this.title === "" || this.title === "" ) {
     alert("No puedes ingresar nulos o vacios")
     }else {
        //  this.libros.push(this.title);
        this.libroService.addLibro(this.title);
        console.log("agregado desde service");
        
     }
    }
    
    constructor( private libroService : LibroService ){
        this.libros = this.libroService.getLibros();
    };

}
