import styled from 'styled-components';
import { BackgroundDto } from '../index';

interface BackgroundProps {
    background: BackgroundDto;
}

export default function Background({ background }: BackgroundProps) {

    return (<BackgroundStyled className={background.className}/>)
}

const BackgroundStyled = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  
  &.bg-gradient-1 {
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  }
  
  &.bg-gradient-2 {
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  }
  
  &.bg-gradient-3 {
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  }
`;
