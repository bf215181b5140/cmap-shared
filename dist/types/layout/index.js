import { z } from 'zod';
import { BaseParentIdSchema } from '../shared';
export var LayoutWidth;
(function (LayoutWidth) {
    LayoutWidth["None"] = "none";
    LayoutWidth["Third"] = "third";
    LayoutWidth["Half"] = "half";
    LayoutWidth["Full"] = "full";
})(LayoutWidth || (LayoutWidth = {}));
export const LayoutFormSchema = BaseParentIdSchema.extend({
    label: z.string().max(32),
    order: z.number(),
    width: z.nativeEnum(LayoutWidth),
});
