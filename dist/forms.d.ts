export declare class FormMeta {
    version: string | undefined;
    name: string | undefined;
    label: string | undefined;
    fields: FormField[] | undefined | null;
}
export declare class FormField {
    name: string;
    label: string;
    description: string | undefined | null;
    type: string;
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
export declare enum FieldType {
    Text = "text",
    Password = "password",
    Textarea = "textarea",
    File = "file",
    Boolean = "boolean",
    Radio = "radio",
    Checkbox = "checkbox",
    Select = "select",
    Submit = "submit"
}
