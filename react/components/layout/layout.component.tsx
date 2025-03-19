import styled from 'styled-components';

export const LayoutGroupGap = '20px';

export const Layout = styled.div`
  background: ${props => props.theme.colors.ui.appBgOpaque};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  gap: ${LayoutGroupGap};
`;
