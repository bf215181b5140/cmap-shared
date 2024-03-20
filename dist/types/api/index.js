"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmapApiErrorDTO = exports.CmapApiError = void 0;
var CmapApiError = /** @class */ (function (_super) {
    __extends(CmapApiError, _super);
    function CmapApiError(message, code) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = 'CmapApiError';
        Object.setPrototypeOf(_this, CmapApiError.prototype);
        return _this;
    }
    CmapApiError.prototype.dto = function () {
        return new CmapApiErrorDTO(this.name, this.message, this.code);
    };
    return CmapApiError;
}(Error));
exports.CmapApiError = CmapApiError;
var CmapApiErrorDTO = /** @class */ (function () {
    function CmapApiErrorDTO(name, message, code, id) {
        this.code = code;
        this.name = name;
        this.message = message;
        this.id = id;
    }
    CmapApiErrorDTO.prototype.setId = function (id) {
        this.id = id;
        return this;
    };
    return CmapApiErrorDTO;
}());
exports.CmapApiErrorDTO = CmapApiErrorDTO;
