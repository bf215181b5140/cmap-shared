import { z } from "zod";

export class FormMeta {
    version: string | undefined;
    name: string | undefined;
    label: string | undefined;
    validationSchema: any;
    fields: FormField[] | undefined | null;
}

export class FormField {
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

export class FieldOption {
    key: string;
    value: string;
}

export enum InputType {
    Text = 'text',
    Button = 'button',
    Checkbox = 'checkbox',
    Date = 'date',
    Email = 'email',
    File = 'file',
    Hidden = 'hidden',
    Number = 'number',
    Password = 'password',
    Radio = 'radio',
    Range = 'range',
    Reset = 'reset',
    Submit = 'submit',
    Time = 'time',
    Url = 'url',
    Label = 'label',
    Boolean = 'boolean',
    Select = 'select',
    Textarea = 'textarea',
}

export class zodSchemas {
    profile = z.object({
        displayName: z.string().min(3).max(50),
        bio: z.string().max(500),
        hidden: z.boolean()
    });

    avatar = z.object({
        id: z.number().nullable(),
        client: z.number(),
        avatar: z.string(),
        label: z.string(),
        primary: z.boolean(),
        order: z.number()
    });

    layout = z.object({
        id: z.number().nullable(),
        avatar: z.number(),
        name: z.string(),
        order: z.number()
    });

    button = z.object({
        id: z.number().nullable(),
        layout: z.number(),
        label: z.string().max(20).nullable(),
        key: z.string().max(100),
        value: z.string().max(5),
        type: z.string(),
        image: z.any().nullable(),
        order: z.number()
    });
}
