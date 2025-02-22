import styled, { css } from 'styled-components';
import { AvatarButtonDTO, ImageOrientation, imageOrientationToAspectRatio, imageUrlPathToUrl, PresetButtonDTO, ThemeDTO, UseAvatarButtonDTO, UsePresetButtonDTO } from '../../../src';
import React, { MouseEvent, useMemo, useState } from 'react';
import { ExpIcon } from '../expIcon/expIcon.component';
import { ButtonBaseStyle } from './button.style';

interface PresetButtonProps {
  theme: ThemeDTO;
  avatarButton: AvatarButtonDTO;
  onClick?: (event: MouseEvent<HTMLDivElement>, useAvatarButton: UseAvatarButtonDTO) => void;
}

export function PresetButtonComponent({ theme, avatarButton, onClick }: PresetButtonProps) {

  const [avatarUsed, setAvatarUsed] = useState(false);

  function onClickInternal(event: React.MouseEvent<HTMLDivElement>) {
    if (avatarUsed) return;

    if (onClick) onClick(event, { id: avatarButton.id });

    setAvatarUsed(true);
    setTimeout(() => setAvatarUsed(false), 100);
  }

  return (<PresetButtonStyled>
    <ParameterButtonStyled className={'parameterButton'} themeDto={theme} onClick={onClickInternal} presetUsed={avatarUsed}>
      {avatarButton.image && <ParameterButtonPicture src={imageUrlPathToUrl(avatarButton.image.urlPath)} imageOrientation={avatarButton.imageOrientation} />}
      {avatarButton.label && <ParameterButtonLabel>{avatarButton.label}</ParameterButtonLabel>}
    </ParameterButtonStyled>
  </PresetButtonStyled>)
}

const PresetButtonStyled = styled.div`
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
