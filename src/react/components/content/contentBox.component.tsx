import { ContentBoxWidth, ReactProps } from '../../../index';
import styled from 'styled-components';
import colors from '../../../colors.json';
import { useEffect, useState } from 'react';
import { CONTENT_GAP } from './content.component';

interface ContentBoxProps extends ReactProps {
    title?: string;
    flexGrow?: number | string;
    flexBasis?: string | ContentBoxWidth;
    loading?: boolean;
    show?: boolean;
}

export default function ContentBox(props: ContentBoxProps) {

    const [shown, setShown] = useState<boolean>(true);

    useEffect(() => {
        if (typeof props.show === 'boolean') {
            setShown(props.show);
        }
    }, [props.show]);

    function getFlexBasis(): string | undefined {
        if (!props.flexBasis) return undefined;
        switch(props.flexBasis) {
            case ContentBoxWidth.None:
                return '0';
            case ContentBoxWidth.Third:
                return `calc(100% * (1 / 3) - ${CONTENT_GAP})`;
            case ContentBoxWidth.Half:
                return `calc(100% * (1 / 2) - ${CONTENT_GAP})`;
            case ContentBoxWidth.Full:
                return `calc(100%)`;
            default:
                return props.flexBasis;
        }
    }

    return (<ContentBoxWrapper flexGrow={props.flexGrow} flexBasis={getFlexBasis()}>
        {props.title && <ContentBoxTitle shown={shown}>
            <h2 onClick={() => setShown(prevState => !prevState)}>
                <i className={'ri-arrow-down-s-line'} />
                {props.title}
            </h2>
        </ContentBoxTitle>}
        {shown && <ContentBoxStyled>
            {props.loading !== true ? props.children : <ContentLoading>
                <div className={'loader'} />
            </ContentLoading>}
        </ContentBoxStyled>}
    </ContentBoxWrapper>);
}

const ContentBoxWrapper = styled.div<{ flexGrow?: number | string, flexBasis?: string }>`
  flex-grow: ${props => props.flexGrow || 2};
  flex-basis: ${props => props.flexBasis || '0'};
`;

const ContentBoxTitle = styled.div<{ shown: boolean }>`
  color: ${colors['font-header-2']};

  h2 {
    display: inline-block;
    font-size: 1.4em;
    padding: 0;
    margin: 5px;
    cursor: pointer;
    text-shadow: 0 0 3px black;

    i {
      display: inline-block;
      transition: transform 0.1s linear;
      transform: rotate(${props => props.shown ? '0' : '-90deg'});
    }
  }
`;

const ContentBoxStyled = styled.div`
  background-color: ${colors['ui-background-3']};
  border-radius: 8px;
  padding: 15px;

  hr {
    border: 1px solid ${colors['app-bg-opaque']};
    margin: 0.5em 0 1em 0;
    padding: 0;
  }
  
  h1 {
    text-shadow: 0 0 3px black;
  }

  h2 {
    font-size: 1.4em;
    color: ${colors['font-header-2']};
    padding: 0;
    margin: 0.5em 0;
    text-shadow: 0 0 3px black;
  }

  h3 {
    font-size: 1em;
    color: ${colors['font-text-2']};
    text-transform: uppercase;
    padding: 0;
    margin: 0.5em 0;
  }

  p {
    margin: 5px 0;
  }
`;

const ContentLoading = styled.div`
  border: 6px solid ${colors['text-1']};
  border-radius: 4px;
  padding: 6px;
  width: 100px;
  position: relative;
  margin: 20px auto 35px auto;

  :before {
    content: '';
    width: 21px;
    height: 15px;
    border-bottom: 6px solid ${colors['text-1']};
    border-right: 6px solid ${colors['text-1']};
    border-radius: 4px;
    position: absolute;
    bottom: -15px;
    right: 15px;
    transform: rotate(35deg);
    background-color: ${colors['ui-background-3']};
  }

  .loader {
    width: 8px;
    height: 60px;
    display: block;
    left: -14px;
    position: relative;
    border-radius: 4px;
    box-sizing: border-box;
    animation: animation 3s step-start infinite;
  }

  @keyframes animation {
    0% {
      box-shadow: 20px 0 transparent, 40px 0 transparent, 60px 0 transparent, 80px 0 transparent, 100px 0 transparent;
    }
    20% {
      box-shadow: 20px 0 ${colors['text-1']}, 40px 0 transparent, 60px 0 transparent, 80px 0 transparent, 100px 0 transparent;
    }
    40% {
      box-shadow: 20px 0 ${colors['text-1']}, 40px 0 ${colors['text-1']}, 60px 0 transparent, 80px 0 transparent, 100px 0 transparent;
    }
    60% {
      box-shadow: 20px 0 ${colors['text-1']}, 40px 0 ${colors['text-1']}, 60px 0 ${colors['text-1']}, 80px 0 transparent, 100px 0 transparent;
    }
    80% {
      box-shadow: 20px 0 ${colors['text-1']}, 40px 0 ${colors['text-1']}, 60px 0 ${colors['text-1']}, 80px 0 ${colors['text-1']}, 100px 0 transparent;
    }
    100% {
      box-shadow: 20px 0 ${colors['text-1']}, 40px 0 ${colors['text-1']}, 60px 0 ${colors['text-1']}, 80px 0 ${colors['text-1']}, 100px 0 ${colors['text-1']};
    }
  }
`;
