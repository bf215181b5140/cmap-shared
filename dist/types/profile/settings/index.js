"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileSettingsSchema = exports.UnknownAvatarDisplayOptions = exports.UnknownAvatarDisplay = void 0;
const zod_1 = require("zod");
// TODO: WIP, do we need seperate settings section?
var UnknownAvatarDisplay;
(function (UnknownAvatarDisplay) {
    UnknownAvatarDisplay["None"] = "none";
    UnknownAvatarDisplay["Default"] = "default";
})(UnknownAvatarDisplay || (exports.UnknownAvatarDisplay = UnknownAvatarDisplay = {}));
exports.UnknownAvatarDisplayOptions = [
    { key: UnknownAvatarDisplay.None, value: 'Nothing', description: 'Don\'t show any avatar layouts' },
    { key: UnknownAvatarDisplay.Default, value: 'Default avatar', description: 'Show default avatar layout' },
];
exports.ProfileSettingsSchema = zod_1.z.object({
    unknownAvatarDisplay: zod_1.z.nativeEnum(UnknownAvatarDisplay),
});
