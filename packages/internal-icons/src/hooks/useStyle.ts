import React from 'react';
import { createStyles, SerializedStyles } from 'antd-style';

import { type IconProps } from '../type';

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

const useStyles = createStyles<IconProps, { iconWrap: SerializedStyles }>(({ css }, props) => {
  return {
    iconWrap: css`
      display: inline-flex;
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
