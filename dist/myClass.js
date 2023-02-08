"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = void 0;
var MyClass = /** @class */ (function () {
    function MyClass(name) {
        this.name = name;
    }
    MyClass.prototype.sayHello = function () {
        return "Hello, ".concat(this.name);
    };
    return MyClass;
}());
exports.MyClass = MyClass;
