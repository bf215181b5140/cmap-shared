import { CmapSelectOption } from '../inputs';

export enum ClientVisibility {
    Private = 'Private',
    Hidden = 'Hidden',
    Visible = 'Visible',
}

export const ClientVisibilityOptions: CmapSelectOption[] = [
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
