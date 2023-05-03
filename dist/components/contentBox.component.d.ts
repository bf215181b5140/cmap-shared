import { ContentBoxWidth, ReactProps } from '../index';
interface ContentProps extends ReactProps {
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}
export declare function Content(props: ContentProps): any;
interface ContentBoxProps extends ReactProps {
    title?: string;
    flexGrow?: number | string;
    flexBasis?: string | ContentBoxWidth;
    loading?: boolean;
}
export declare function ContentBox(props: ContentBoxProps): any;
export {};
