import { z } from "zod";
export declare class FormMeta {
    version: string | undefined;
    name: string | undefined;
    label: string | undefined;
    validationSchema: any;
    fields: FormField[] | undefined | null;
}
export declare class FormField {
    name: string;
    label: string;
    description: string | undefined | null;
    value: string | number | boolean | Date | undefined | null;
    type: InputType;
    required: boolean | undefined | null;
    minLength: number | undefined | null;
    maxLength: number | undefined | null;
    pattern: string | undefined | null;
    order: number;
    editable: boolean;
    visible: boolean;
    options: FieldOption[] | undefined | null;
}
export declare class FieldOption {
    key: string;
    value: string;
}
export declare enum InputType {
    Text = "text",
    Button = "button",
    Checkbox = "checkbox",
    Date = "date",
    Email = "email",
    File = "file",
    Hidden = "hidden",
    Number = "number",
    Password = "password",
    Radio = "radio",
    Range = "range",
    Reset = "reset",
    Submit = "submit",
    Time = "time",
    Url = "url",
    Label = "label",
    Boolean = "boolean",
    Select = "select",
    Textarea = "textarea"
}
export declare class zodSchemas {
    profile: z.ZodObject<{
        displayName: z.ZodString;
        bio: z.ZodString;
        hidden: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        displayName?: string;
        bio?: string;
        hidden?: boolean;
    }, {
        displayName?: string;
        bio?: string;
        hidden?: boolean;
    }>;
    avatar: z.ZodObject<{
        id: z.ZodNullable<z.ZodNumber>;
        client: z.ZodNumber;
        avatar: z.ZodString;
        label: z.ZodString;
        primary: z.ZodBoolean;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id?: number;
        client?: number;
        avatar?: string;
        label?: string;
        primary?: boolean;
        order?: number;
    }, {
        id?: number;
        client?: number;
        avatar?: string;
        label?: string;
        primary?: boolean;
        order?: number;
    }>;
    layout: z.ZodObject<{
        id: z.ZodNullable<z.ZodNumber>;
        avatar: z.ZodNumber;
        name: z.ZodString;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id?: number;
        avatar?: number;
        name?: string;
        order?: number;
    }, {
        id?: number;
        avatar?: number;
        name?: string;
        order?: number;
    }>;
    button: z.ZodObject<{
        id: z.ZodNullable<z.ZodNumber>;
        layout: z.ZodNumber;
        label: z.ZodNullable<z.ZodString>;
        key: z.ZodString;
        value: z.ZodString;
        type: z.ZodString;
        image: z.ZodNullable<z.ZodAny>;
        order: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id?: number;
        layout?: number;
        label?: string;
        key?: string;
        value?: string;
        type?: string;
        image?: any;
        order?: number;
    }, {
        id?: number;
        layout?: number;
        label?: string;
        key?: string;
        value?: string;
        type?: string;
        image?: any;
        order?: number;
    }>;
}
