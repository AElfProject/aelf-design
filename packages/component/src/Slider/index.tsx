import React from 'react';
import { useControllableValue } from 'ahooks';
import { Slider as AntdSlider, Form, InputNumber } from 'antd';
import type { InputNumberProps, SliderSingleProps } from 'antd';
import { useTheme } from 'antd-style';
import classNames from 'classnames';
import type { SliderRef } from 'rc-slider';

import { getClearIcon } from '../Input';
import useStyle, { useSlideBindInputStyles } from './style/index';
import type { ISliderBindInputProps, SliderBindInputRef, SliderProps, Status } from './type';

const Slider = React.forwardRef<SliderRef, SliderProps>((props, ref) => {
  const { prefixCls } = useTheme();
  const { styles } = useStyle(props);
  const { status, className, ...resetProps } = props;
  const cls = classNames(`${prefixCls}-slider-${status}`, className, styles.sliderWrap);
  // const cls = classNames(`${prefixCls}-slider-${status}`, className);
  return (
    <>
      <AntdSlider ref={ref} {...resetProps} className={cls} />
    </>
  );
});

Slider.displayName = 'Slider';

const SliderBindInput = React.forwardRef<SliderBindInputRef, ISliderBindInputProps>(
  (props, ref) => {
    const { prefixCls } = useTheme();
    const { styles } = useSlideBindInputStyles(props);
    // controlled value and not controlled value
    const [bindState, setbindState] = useControllableValue<number | null>(props);
    const token = useTheme();
    const { status: antdFormItemStatus } = Form.Item.useStatus();

    const {
      inputProps,
      className,
      style,
      sliderProps,
      defaultValue,
      status,
      min = 0,
      max = 100,
    } = props;

    // user status is the highest priority, form item status is the second
    const finalStatus = status || antdFormItemStatus;

    const handleInputChange: InputNumberProps['onChange'] = (value: number | string | null) => {
      setbindState(value as number);
    };
    const handleSliderChange: SliderSingleProps['onChange'] = (value: number) => {
      setbindState(value);
    };
    const cls = classNames(`${prefixCls}-slider-bind-input`, className, styles.wrap);
    const inputCls = classNames(
      `${prefixCls}-slider-input`,
      styles.sliderInput,
      sliderProps?.className,
    );
    const sliderCls = classNames(`${prefixCls}-slider`, styles.slider, inputProps?.className);
    const clearIcon = getClearIcon(() => {
      setbindState(null);
    }, token);
    const SuffixNode = (
      <span className={styles.suffix}>
        <span className={styles.clear}>{clearIcon}</span>
        <span className={styles.unit}>%</span>
      </span>
    );
    return (
      <div className={cls} style={style}>
        <Slider
          status={finalStatus as Status}
          min={min}
          max={max}
          onChange={handleSliderChange}
          value={typeof bindState === 'number' ? bindState : 0}
          {...sliderProps}
          className={sliderCls}
        />
        <div className={inputCls}>
          <InputNumber
            min={min}
            max={max}
            defaultValue={defaultValue}
            value={bindState}
            controls={false}
            onChange={handleInputChange}
            {...inputProps}
          />
          {SuffixNode}
        </div>
      </div>
    );
  },
);
SliderBindInput.displayName = 'SliderBindInput';
export default Slider;
export { SliderBindInput };
export type { SliderSingleProps, SliderProps };
