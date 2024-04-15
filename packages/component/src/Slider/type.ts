import { ForwardRefExoticComponent, PropsWithoutRef } from 'react';
import { Slider as AntdSlider, InputNumberProps, SliderSingleProps } from 'antd';

type AntdSliderType = typeof AntdSlider;
type ExtractedForwardRefProps<T> = T extends ForwardRefExoticComponent<infer U> ? U : never;
type AntdSliderPropsWithRef = ExtractedForwardRefProps<AntdSliderType>;
type AntdSliderProps = PropsWithoutRef<AntdSliderPropsWithRef>;

export type Status = 'error' | 'warning' | 'success' | 'validating';
export type SliderProps = AntdSliderProps & {
  status?: Status;
};

export interface ISliderBindInputProps {
  value?: number;
  onChange?: (value: number) => void;
  defaultValue?: number;
  status?: Status;
  className?: string;
  min?: number;
  max?: number;
  style?: React.CSSProperties;
  sliderProps?: SliderSingleProps;
  inputProps?: InputNumberProps;
}

export interface SliderBindInputRef {}
