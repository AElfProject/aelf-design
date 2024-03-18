import React from 'react';

export interface IconInnerProps {
  width?: string | number;
  height?: string | number;
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  twoToneColor?: string[];
  hoverTwoToneColor?: string[];
  activeTwoToneColor?: string[];
  className?: string;
  style?: React.CSSProperties;
}
type MergedHTMLAttributes = React.HTMLAttributes<HTMLSpanElement>;
export interface IconProps extends IconInnerProps, MergedHTMLAttributes {
  //
}
