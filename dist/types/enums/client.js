"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflineDisplayOptions = exports.OfflineDisplay = exports.UnknownAvatarDisplayOptions = exports.UnknownAvatarDisplay = exports.ClientVisibilityOptions = exports.ClientVisibility = void 0;
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
var UnknownAvatarDisplay;
(function (UnknownAvatarDisplay) {
    UnknownAvatarDisplay["BasicMessage"] = "BasicMessage";
    UnknownAvatarDisplay["DefaultLayout"] = "DefaultLayout";
    UnknownAvatarDisplay["CustomMessage"] = "CustomMessage";
})(UnknownAvatarDisplay || (exports.UnknownAvatarDisplay = UnknownAvatarDisplay = {}));
exports.UnknownAvatarDisplayOptions = [
    {
        key: UnknownAvatarDisplay.BasicMessage, value: 'Basic message',
        description: 'Show basic message that your avatar is unrecognized.'
    },
    {
        key: UnknownAvatarDisplay.DefaultLayout, value: 'Default layout',
        description: 'Show layout that is set as default. Note: if no layout is selected as default then Basic message will be shown.'
    },
    {
        key: UnknownAvatarDisplay.CustomMessage, value: 'Custom message',
        description: 'Display a custom message.'
    },
];
var OfflineDisplay;
(function (OfflineDisplay) {
    OfflineDisplay["BasicMessage"] = "BasicMessage";
    OfflineDisplay["CustomMessage"] = "CustomMessage";
})(OfflineDisplay || (exports.OfflineDisplay = OfflineDisplay = {}));
exports.OfflineDisplayOptions = [
    {
        key: OfflineDisplay.BasicMessage, value: 'Basic message',
        description: 'Show basic message that you are offline.'
    },
    {
        key: OfflineDisplay.CustomMessage, value: 'Custom message',
        description: 'Display a custom message.'
    },
];
