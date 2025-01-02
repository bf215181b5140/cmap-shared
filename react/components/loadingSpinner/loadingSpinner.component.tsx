import styled from 'styled-components';

const LoadingSpinner = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  :after {
    content: '';
    display: inline-block;
    width: 48px;
    height: 48px;
    margin: 24px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default LoadingSpinner;