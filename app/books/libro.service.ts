export class LibroService {
    libros = [];
    getLibros(){
        return  this.libros = ["HP","GOT"];
    }
    addLibro(str){
        this.libros.push(str);
    }
}
