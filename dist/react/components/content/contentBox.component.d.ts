import { ContentBoxWidth, ReactProps } from '../../types';
interface ContentBoxProps extends ReactProps {
    title?: string;
    flexGrow?: number | string;
    flexBasis?: string | ContentBoxWidth;
    loading?: boolean;
    show?: boolean;
}
export default function ContentBox(props: ContentBoxProps): import("react/jsx-runtime").JSX.Element;
export {};
