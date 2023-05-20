import { ReactProps } from '../../index';
import styled from 'styled-components';

interface ContentProps extends ReactProps {
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export default function Content(props: ContentProps) {

    return (<ContentStyled flexDirection={props.flexDirection}>
        {props.children}
    </ContentStyled>);
}

export const CONTENT_GAP: string = '20px';

const ContentStyled = styled.div<{ flexDirection?: string }>`
  margin: 20px;
  display: flex;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
  flex-wrap: wrap;
  gap: ${CONTENT_GAP};
`;

