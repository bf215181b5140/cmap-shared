export class FormMeta {
    version: string | undefined;
    name: string | undefined;
    label: string | undefined;
    fields: FormField[] | undefined | null;
}

export class FormField {
    name: string;
    label: string;
    description: string | undefined | null;
    value: string | boolean | number | undefined | null;
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
