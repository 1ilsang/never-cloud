import styled, { css, CSSProp, StyledComponent } from 'styled-components';
import errorPlaceHolder from 'assets/img/empty-image.png';

export const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU1tCuBwACAwD/ZZus7wAAAABJRU5ErkJggg==';
// export const errorPlaceHolder = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8p6paDwAEugGpdXZxwQAAAABJRU5ErkJggg==`;

export const Image: StyledComponent<'img', {}, {}, string> = styled.img`
  ${css`
    ${(props: { myStyle?: CSSProp }) => props.myStyle}
  `}
  // Add a smooth animation on loading
  @keyframes loaded {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
  // I use utilitary classes instead of props to avoid style regenerating
  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }
  &.has-error {
    // fallback to placeholder image on error
    content: url(${errorPlaceHolder});
    transform: scale(0.5);
  }
`;
