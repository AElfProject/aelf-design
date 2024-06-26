import type { MouseEvent } from 'react';
import React, { useCallback, useMemo, useState } from 'react';
import { DownOutlined, SearchOutlined } from '@aelf-design/icons';
import type { MenuProps } from 'antd';
import type { MenuItemType } from 'antd/lib/menu/hooks/useItems';

import type { DropdownSizeType } from '../Dropdown';
import Dropdown from '../Dropdown';
import type { IInputProps, InputSizeType } from '../Input';
import Input from '../Input';
import useStyles from './style';

export type WithSearchIconType = 'connect' | 'inline' | 'after';

interface FilterItemType extends MenuItemType {
  value: string;
}

type MenuClickEventHandlerNullable = MenuProps['onClick'];
type MenuClickEventHandler = NonNullable<MenuClickEventHandlerNullable>;
export interface ISearchProps extends Omit<IInputProps, 'size' | 'addonAfter' | 'suffix'> {
  inputSize?: InputSizeType;
  dropdownSize?: DropdownSizeType;
  filterItems?: FilterItemType[];
  prefixWidth?: number;
  withSearchIcon?: WithSearchIconType;
  className?: string;
  style?: React.CSSProperties;
  inputClassName?: string;
  onSelectChange?: MenuClickEventHandler;
  onSearchBtnClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

function Search({
  inputSize = 'middle',
  dropdownSize = 'default',
  filterItems = [],
  prefixWidth,
  withSearchIcon,
  status,
  className,
  inputClassName,
  onSelectChange,
  onSearchBtnClick,
  style,
  ...props
}: ISearchProps) {
  const [checkedItem, setCheckedItem] = useState(filterItems[0]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { styles, cx } = useStyles({ prefixWidth, inputSize, withSearchIcon });

  const isMiddleSize = inputSize === 'middle';
  const isInlineSearchIcon = withSearchIcon === 'inline';
  const isNotInlineSearchIcon = withSearchIcon === 'connect' || withSearchIcon === 'after';
  const isErrorStatus = status === 'error';

  const searchBtnClickHandler = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (isErrorStatus) {
        return;
      }
      onSearchBtnClick?.(e);
    },
    [onSearchBtnClick, isErrorStatus],
  );

  const searchBtnNode = (
    <div
      onClick={searchBtnClickHandler}
      className={cx(
        isInlineSearchIcon ? styles.searchBtnInline : styles.searchBtn,
        isErrorStatus && styles.searchBtnDisabled,
      )}
    >
      <SearchOutlined />
    </div>
  );

  const filterClickHandler: MenuClickEventHandler = useCallback(
    (obj) => {
      const idx = filterItems.findIndex((ele) => ele?.key === obj.key);
      setCheckedItem(filterItems[idx]);
      setIsDropDownOpen(false);
      onSelectChange?.(obj);
    },
    [filterItems, onSelectChange],
  );

  const onOpenChangeHandler = useCallback((open: boolean) => {
    setIsDropDownOpen(open);
  }, []);

  const prefixDom = useMemo(() => {
    if (filterItems.length === 0) {
      return <SearchOutlined />;
    }
    return (
      <Dropdown
        menu={{
          items: filterItems,
          selectable: true,
          onClick: filterClickHandler,
          defaultSelectedKeys: [`${checkedItem?.key}`],
        }}
        size={dropdownSize}
        trigger={['click']}
        offsetX={isMiddleSize ? -12 : -8}
        offsetY={isMiddleSize ? 10 : 6}
        onOpenChange={onOpenChangeHandler}
      >
        <div className={styles.searchDropDownWrap}>
          <div className={styles.searchDropDownLeft}>
            <div className={styles.searchDropDownLeftLabel}>{checkedItem?.value}</div>
            <DownOutlined className={cx(isDropDownOpen && styles.collapseIcon)} />
          </div>
          <div className={styles.searchDropDownRight}>
            <SearchOutlined />
          </div>
        </div>
      </Dropdown>
    );
  }, [
    checkedItem?.key,
    checkedItem?.value,
    cx,
    dropdownSize,
    filterClickHandler,
    filterItems,
    isDropDownOpen,
    isMiddleSize,
    onOpenChangeHandler,
    styles.collapseIcon,
    styles.searchDropDownLeft,
    styles.searchDropDownLeftLabel,
    styles.searchDropDownRight,
    styles.searchDropDownWrap,
  ]);

  return (
    <div className={cx(styles.search, className)} style={style}>
      <div className={styles.searchInput}>
        <Input
          {...props}
          status={status}
          size={inputSize}
          prefix={prefixDom}
          className={inputClassName}
          suffix={isInlineSearchIcon && searchBtnNode}
        />
      </div>
      {isNotInlineSearchIcon && searchBtnNode}
    </div>
  );
}

export default Search;
