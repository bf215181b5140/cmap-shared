"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientVisibilityOptions = exports.ClientVisibility = void 0;
var ClientVisibility;
(function (ClientVisibility) {
    ClientVisibility["Private"] = "Private";
    ClientVisibility["Hidden"] = "Hidden";
    ClientVisibility["Visible"] = "Visible";
})(ClientVisibility || (exports.ClientVisibility = ClientVisibility = {}));
exports.ClientVisibilityOptions = [
    {
        key: ClientVisibility.Private, value: 'Private',
        description: 'Your profile on the website is not accessible.'
    },
    {
        key: ClientVisibility.Hidden, value: 'Hidden',
        description: 'Your profile on the website is only accessible with URL.'
    },
    {
        key: ClientVisibility.Visible, value: 'Visible',
        description: 'Your profile on the website is accessible with URL and is displayed on the website main page.'
    },
];
