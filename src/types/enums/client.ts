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

export enum UnknownAvatarDisplay {
    BasicMessage = 'BasicMessage',
    DefaultLayout = 'DefaultLayout',
    CustomMessage = 'CustomMessage',
}

export const UnknownAvatarDisplayOptions: CmapSelectOption[] = [
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

export enum OfflineDisplay {
    BasicMessage = 'BasicMessage',
    CustomMessage = 'CustomMessage',
}

export const OfflineDisplayOptions: CmapSelectOption[] = [
    {
        key: OfflineDisplay.BasicMessage, value: 'Basic message',
        description: 'Show basic message that you are offline.'
    },
    {
        key: OfflineDisplay.CustomMessage, value: 'Custom message',
        description: 'Display a custom message.'
    },
];
