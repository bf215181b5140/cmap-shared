"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadedFileDTO = void 0;
var UploadedFileDTO = /** @class */ (function () {
    function UploadedFileDTO(object) {
        this.id = object === null || object === void 0 ? void 0 : object.id;
        this.fileName = object === null || object === void 0 ? void 0 : object.fileName;
        this.urlPath = object === null || object === void 0 ? void 0 : object.urlPath;
    }
    return UploadedFileDTO;
}());
exports.UploadedFileDTO = UploadedFileDTO;
var test = new UploadedFileDTO();
