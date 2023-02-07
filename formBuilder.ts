export class FormMeta {
    version: string | undefined;
    name: string | undefined;
    label: string | undefined;
    fields: FormFields[] | undefined | null;
}

export class FormFields {
    name: string | undefined | null;
    label: string | undefined | null;
    length: number | undefined | null;
    type: string | undefined | null;
    regex: string | undefined | null;
    order: number | undefined | null;
    editable: boolean | undefined | null;
    visible: boolean | undefined | null;
}

