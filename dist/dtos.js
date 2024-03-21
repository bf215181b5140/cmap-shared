"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarsPageDto = exports.ProfilePageDto = void 0;
var index_1 = require("./index");
var ProfilePageDto = /** @class */ (function () {
    function ProfilePageDto() {
        this.client = new index_1.ClientDto();
        this.backgrounds = [];
        this.buttonStyles = [];
    }
    return ProfilePageDto;
}());
exports.ProfilePageDto = ProfilePageDto;
var AvatarsPageDto = /** @class */ (function () {
    function AvatarsPageDto() {
        this.tier = new index_1.TierDto();
        this.buttonStyle = new index_1.ButtonStyleDto();
        this.avatars = [];
    }
    return AvatarsPageDto;
}());
exports.AvatarsPageDto = AvatarsPageDto;
