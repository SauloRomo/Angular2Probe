System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LibroService;
    return {
        setters:[],
        execute: function() {
            LibroService = (function () {
                function LibroService() {
                    this.libros = [];
                }
                LibroService.prototype.getLibros = function () {
                    return this.libros = ["HP", "GOT"];
                };
                LibroService.prototype.addLibro = function (str) {
                    this.libros.push(str);
                };
                return LibroService;
            }());
            exports_1("LibroService", LibroService);
        }
    }
});
//# sourceMappingURL=libro.service.js.map