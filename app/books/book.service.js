System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BookService;
    return {
        setters:[],
        execute: function() {
            BookService = (function () {
                function BookService() {
                }
                BookService.prototype.getLibros = function () {
                    return ["HP", "CS", "HK"];
                };
                return BookService;
            }());
            exports_1("BookService", BookService);
        }
    }
});
//# sourceMappingURL=book.service.js.map