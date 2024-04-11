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
        width: 1em;
        height: 1em;
      }
      vertical-align: -0.125em;
      ${createPathsStyle(props.twoToneColor ?? [])}
      ${createPathsStyle(props.hoverTwoToneColor ?? [], 'hover')}
        ${createPathsStyle(props.activeTwoToneColor ?? [], 'active')}
    `,
  };
});

export { useStyles };
