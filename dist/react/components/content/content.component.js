import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
export default function Content(props) {
    return (_jsx(ContentStyled, { flexDirection: props.flexDirection, children: props.children }));
}
export const CONTENT_GAP = '20px';
const ContentStyled = styled.div `
  margin: 20px;
  display: flex;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
  flex-wrap: wrap;
  gap: ${CONTENT_GAP};
`;
