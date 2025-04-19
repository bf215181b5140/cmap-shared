import styled, { css } from 'styled-components';
import { AvatarButtonDTO, ImageOrientation, imageOrientationToAspectRatio, imageUrlPathToUrl, ThemeDTO, UseAvatarButtonDTO } from '../../../src';
import React, { MouseEvent, useState } from 'react';
import { ButtonBaseStyle } from './button.style';
import { DragItemProps } from '../../util';

interface AvatarButtonProps extends DragItemProps {
  theme: ThemeDTO;
  avatarButton: AvatarButtonDTO;
  active?: boolean;
  onClick?: (event: MouseEvent<HTMLDivElement>, useAvatarButton: UseAvatarButtonDTO) => void;
}

export function AvatarButtonComponent({ theme, avatarButton, onClick, draggable, onDragStart, onDragEnd, onDragOver, onDrop }: AvatarButtonProps) {

  const [avatarUsed, setAvatarUsed] = useState(false);

  function onClickInternal(event: React.MouseEvent<HTMLDivElement>) {
    if (avatarUsed) return;

    if (onClick) onClick(event, { id: avatarButton.id });

    setAvatarUsed(true);
    setTimeout(() => setAvatarUsed(false), 100);
  }

  return (<AvatarButtonStyled {...{draggable, onDragStart, onDragEnd, onDragOver, onDrop}}>
    <ParameterButtonStyled className={'parameterButton'} themeDto={theme} onClick={onClickInternal} presetUsed={avatarUsed}>
      {avatarButton.image && <ParameterButtonPicture src={imageUrlPathToUrl(avatarButton.image.urlPath)} imageOrientation={avatarButton.imageOrientation} />}
      {avatarButton.label && <ParameterButtonLabel>{avatarButton.label}</ParameterButtonLabel>}
    </ParameterButtonStyled>
  </AvatarButtonStyled>);
}

const AvatarButtonStyled = styled.div`
  width: 100%;
  margin-bottom: 20px;
  break-inside: avoid-column;
  position: relative;
`;

const ParameterButtonStyled = styled(ButtonBaseStyle)<{ presetUsed: boolean }>`
  min-height: 72px;
  overflow: hidden;
  position: relative;

  ${props => props.presetUsed && css`transform: scale(1) !important;`}
`;

const ParameterButtonPicture = styled.div<{ src: string, imageOrientation: ImageOrientation }>`
  width: 100%;
  aspect-ratio: ${props => imageOrientationToAspectRatio(props.imageOrientation)};
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

const ParameterButtonLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
