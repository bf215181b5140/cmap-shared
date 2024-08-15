import { ReactNode } from 'react';

export interface ReactProps {
    children?: ReactNode;
}

export enum ContentBoxWidth {
    None = 'None',
    Third = 'Third',
    Half = 'Half',
    Full = 'Full'
}
