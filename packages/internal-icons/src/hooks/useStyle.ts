import { BaseReturnType, createStyles, SerializedStyles } from 'antd-style';

export interface IconColorProps {
  width?: string | number;
  height?: string | number;
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  twoToneColor?: string[];
  hoverTwoToneColor?: string[];
  activeTwoToneColor?: string[];
}
const createPathsStyle = (colors: string[], timing?: 'hover' | 'active') => {
  return colors.reduce((pre, next, i) => {
    const selectorPrefix = timing ? `&:${timing} ` : '';
    const selector = `${selectorPrefix} path:nth-of-type(${i + 1})`;
    const styleStr = `
    ${pre}
    ${selector} {
      fill: ${colors[i]};
    }
    `;
    return styleStr;
  }, '');
};

const useStyles = createStyles<IconColorProps, { iconWrap: SerializedStyles }>(({ css }, props) => {
  return {
    iconWrap: css`
      width: ${typeof props.width === 'number' ? `${props.width}px` : props.width};
      height: ${typeof props.height === 'number' ? `${props.height}px` : props.height};
      path:nth-of-type(1) {
        fill: ${props.color};
      }
      &:hover path:nth-of-type(1) {
        fill: ${props.hoverColor};
      }
      &:active path:nth-of-type(1) {
        fill: ${props.activeColor};
      }
      svg {
        width: 100%;
        height: 100%;
      }
      ${createPathsStyle(props.twoToneColor ?? [])}
      ${createPathsStyle(props.hoverTwoToneColor ?? [], 'hover')}
        ${createPathsStyle(props.activeTwoToneColor ?? [], 'active')}
    `,
  };
});

export { useStyles };
