import { ReactProps } from '../../types';
interface ContentProps extends ReactProps {
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}
export default function Content(props: ContentProps): import("react/jsx-runtime").JSX.Element;
export declare const CONTENT_GAP: string;
export {};
